<script setup lang="ts">
import Card from "components/block/Card.vue";
import {useP2PStore} from "stores/p2p";
import {onMounted, ref} from "vue";
import Input from "components/element/Input.vue";
import Button from "components/element/Button.vue";
import {rupayApi} from "boot/axios";
import {useToast} from "src/composables/useToast";
import {useCommonStore} from "stores/common";
import {useErachain} from "src/composables/useErachain";
import {useWalletStore} from "stores/wallet";
import {useRoute} from "vue-router";
const {getP2PUser} = useP2PStore()
const p2pStore = useP2PStore()
const {toast, Icon, Color} = useToast()
const {rupayStats } = useCommonStore()
const {getFee, signTransaction} = useErachain()
const walletStore = useWalletStore()
const route = useRoute()
const asset = walletStore.getOwnAssetByKey('1048647')

const POOL = 'hero'
const activeTab = ref('main')
const page = ref(1)
const maxPages = ref(1)
const reinvestOrWithrawalAmount = ref(null)
const mainBalanceWithdrawalAmount = ref(null)
const incomeAmount = ref(null)
const mainBalanceWithdrawalModalActive = ref(false)
const incomeModalActive = ref(false)
const loading = ref(false)
const tx = ref(null)

const pool_records = ref([])
onMounted(async ()=>{
  await getP2PUser()
  await getPoolRecords()
})

const getPoolRecords = async ()=>{
  const {data} = await rupayApi(`/api/p2p/pool_records?pool=${POOL}&wallet=${p2pStore.p2pUser.wallet}&page=${page.value}`)

  pool_records.value = data
  maxPages.value = Math.ceil(data.count / 15)
}
const setPage =  async () => {
  await getPoolRecords()
}

const poolAction = async (action) => {
  mainBalanceWithdrawalModalActive.value = false
  loading.value = !loading.value
  let amount

  if (action==='reinvest' || action==='full_withdrawal'){
    amount = reinvestOrWithrawalAmount.value
  }

  if (action==='main_balance_withdrawal'){
    amount = mainBalanceWithdrawalAmount.value
  }
  if (action==='income'){
    amount = incomeAmount.value
  }
  const {data} = await rupayApi.post('/api/p2p/pool_action',{
    action,
    amount,
    wallet:p2pStore.p2pUser.wallet,
    pool:POOL,
    tx:tx.value
  })
  if (data.success){
    toast(data.message,Icon.success,Color.success)

    await getP2PUser()
    page.value = 1
    await getPoolRecords()
  }else {
    toast(data.message,Icon.error,Color.error)
  }
  reinvestOrWithrawalAmount.value = null
  mainBalanceWithdrawalAmount.value = null
  incomeAmount.value = null
  loading.value = !loading.value
}

const sendToChain = async () => {
  loading.value = !loading.value
  const feeResult = await getFee(
    1048647,
    incomeAmount.value!,
    '7JXmTnbwuDnpqQ3NwxwzhfGgDk223j13eP',
    `Пополнение пула ${POOL}`,
    `Пополнение пула ${POOL}`
  )
  if (feeResult.success){
    const singResult = await signTransaction(feeResult.raw)
    if (singResult.success){
      tx.value = singResult.result.signature
      await poolAction('income')
    }
  }
  loading.value = !loading.value
}
</script>

<template>
  <q-page padding>
    <Card title="Trading Pool Hero">
      <template v-if="p2pStore.p2pUser?.in_trading_pool">
        <q-card flat bordered class="full-height">
          <q-tabs
            v-model="activeTab"
            indicator-color="transparent"
            class="shadow-2"
            align="justify"
            active-color="dark"
            active-bg-color="tab"
          >
            <q-tab no-caps name="main" label="Основное" />
            <q-tab no-caps name="history" label="История ввод/вывод" />


          </q-tabs>
          <q-separator/>
          <q-tab-panels v-model="activeTab" animated
                        class="full-height">
            <q-tab-panel  name="main" class=" ">
              <p class="q-mb-sm text-weight-medium">Рефераральный код {{p2pStore.p2pUser?.pool_own_reffer_code}}</p>
              <p class="q-mb-sm text-weight-medium">Баланс основной {{parseFloat(p2pStore.p2pUser?.balance_main)}} USDT</p>
              <div class="row q-col-gutter-md">
                <div class="col-6">
                  <Button  color="negative" class="full-width" @click="mainBalanceWithdrawalModalActive=true" label="Вывести"/>
                </div>
                <div class="col-6">
                  <Button  class="full-width" :loading="loading" @click="incomeModalActive=true" color="positive" label="Пополнить"/>
                </div>
              </div>
              <q-separator spaced="lg"/>
              <div v-if="parseFloat(p2pStore.p2pUser?.balance_freeze)>0">
                <p class="q-mb-sm text-weight-medium text-grey-8">Замороженый баланс {{parseFloat(p2pStore.p2pUser?.balance_freeze)}} USDT | Дата разморозки {{new Date(p2pStore.p2pUser.balance_unfreeze).toLocaleDateString()}}</p>
                <q-separator spaced="lg"/>
              </div>

<!--              <p class="q-mb-sm text-weight-medium">Баланс потенциальный {{parseFloat(p2pStore.p2pUser?.balance_potential)}} USDT</p>-->
<!--              <q-separator spaced="lg"/>-->
              <p class="q-mb-sm text-weight-medium">Баланс для вывода или реинвеста {{parseFloat(p2pStore.p2pUser?.balance_withdrawal)}} USDT</p>

              <Input v-model="reinvestOrWithrawalAmount" type="number" label="Введите сумму вывода или реинвестирования"/>
              <div class="row q-col-gutter-md">
                <div class="col-6">
                  <Button :disabled="!reinvestOrWithrawalAmount" color="negative" class="full-width" @click="poolAction('full_withdrawal')" label="Вывести"/>
                </div>
                <div class="col-6">
                  <Button :disabled="!reinvestOrWithrawalAmount" class="full-width" :loading="loading" color="positive" @click="poolAction('reinvest')" label="Реинвест"/>
                </div>
              </div>

            </q-tab-panel>
            <q-tab-panel  name="history" class=" ">
              <q-list class="q-mb-lg">
                <q-item  v-for="item in pool_records.results" :key="item.id">
                  <q-item-section  >
                    <q-item-label  overline>Дата</q-item-label>
                    <q-item-label caption>{{new Date(item.created_at).toLocaleDateString()}}</q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label :class="item.is_income? 'text-green-13' : 'text-red-13'" overline>Сумма</q-item-label>
                    <q-item-label :class="item.is_income? 'text-green-13' : 'text-red-13'" caption>{{parseFloat(item.amount)}} USDT</q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label :class="item.is_income? 'text-green-13' : 'text-red-13'" overline>{{item.is_income? 'Ввод' : 'Вывод'}}</q-item-label>
                    <q-item-label :class="item.is_income? 'text-green-13' : 'text-red-13'" caption>{{item.action_type}}</q-item-label>
                  </q-item-section>

                </q-item>
              </q-list>
              <div class="flex justify-center">
                <q-pagination
                  v-model="page"
                  :max="maxPages"
                  :max-pages="6"
                  size="20px"
                  direction-links
                  boundary-numbers
                  color="accent"
                  @update:model-value = setPage
                  icon-first="skip_previous"
                  icon-last="skip_next"
                  icon-prev="fast_rewind"
                  icon-next="fast_forward"
                />
              </div>

            </q-tab-panel>


          </q-tab-panels>


        </q-card>
      </template>
      <template v-else>
        <p>
          Уверенная прибыль с нашим торговым ботом, основанная на точных сигналах нашей нейросети!<br><br>
          Участвуй в нашем доверительном пуле по трейдингу и получай доходность от 5 до 100% в месяц!<br><br>

          Мы гордимся представить вам наш торговый бот, который использует передовые технологии и собственную нейросеть для предсказания рыночных движений. Наша нейросеть демонстрирует удивительную точность в выдаче сигналов для торговли - более 92% точных прогнозов!<br><br>

          Благодаря точным сигналам нашей нейросети, наш торговый бот обеспечивает стабильную и уверенную прибыль для наших инвесторов. Мы стремимся к максимизации прибыли и минимизации рисков для всех наших клиентов.<br><br>
          Комиссия пула составляет 25% с вашего дохода. Мы не берем комиссию с вашего депозита, а только с дохода, который вы получаете в пуле.<br><br>
          Присоединяйтесь к нашему пулу и начните зарабатывать с нами уже сегодня!

          Для участия в нашем пуле просто напиши в личку нашему администратору в Telegram по адресу <a style="text-decoration: underline" class="text-positive text-bold" target="_blank" href="https://t.me/EvgenTrade24">@EvgenTrade24</a>  и присоединяйся к пулу до 30 апреля 2024 года. Как бонус, каждый участник, присоединившийся до указанной даты, получит неделю бесплатного дохода!<br><br>
          Благодаря точным сигналам нашей нейросети, наш торговый бот обеспечивает стабильную и уверенную прибыль для наших инвесторов. Мы стремимся к максимизации прибыли и минимизации рисков для всех наших клиентов.
        </p>
      </template>


    </Card>

    <q-dialog v-model="incomeModalActive">
      <q-card flat style="width:500px; max-width: 100vw;">
        <q-card-section class="bg-grey-invert">
          <div class="text-accent">Пополнение основного баланса</div>
        </q-card-section>

        <q-card-section >
          <p class="text-h6 text-bold text-red-14 ">Ваш баланс {{asset?.balance.own}} USDT</p>
          <Input v-model="incomeAmount" type="number" label="Введите сумму пополнения"/>
        </q-card-section>
        <q-card-actions align="center" class="q-pt-none">
          <q-btn :loading="loading" no-caps unelevated color="positive" :disable="!incomeAmount"
                 @click="sendToChain" label="Пополнить" v-close-popup />
          <q-btn no-caps unelevated color="grey-9" label="Отмена" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="mainBalanceWithdrawalModalActive">
      <q-card flat style="width:500px; max-width: 100vw;">
        <q-card-section class="bg-grey-invert">
          <div class="text-accent">Укажите сумму вывода на баланс для вывода или реинвеста</div>
        </q-card-section>

        <q-card-section >
          <p class="text-h6 text-bold text-red-14 text-center">Внимание! Комиссия вывода {{rupayStats?.withdraw_percent}}%</p>
          <Input v-model="mainBalanceWithdrawalAmount" type="number" label="Введите сумму"/>
          <p v-if="mainBalanceWithdrawalAmount" class="text-h6 text-bold text-red-14 text-center">
            Вы получите {{
            parseFloat(
              parseFloat(mainBalanceWithdrawalAmount) -
              (parseFloat(mainBalanceWithdrawalAmount) * (parseFloat(rupayStats?.withdraw_percent) / 100))
            ).toFixed(5)

            }} USDT
          </p>
        </q-card-section>

        <q-card-actions align="center" class="q-pt-none">
          <q-btn :loading="loading" no-caps unelevated color="positive" :disable="!mainBalanceWithdrawalAmount"
                 @click="poolAction('main_balance_withdrawal')" label="Вывести" v-close-popup />
          <q-btn no-caps unelevated color="grey-9" label="Отмена" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style scoped lang="sass">

</style>
