<script setup lang="ts">
import Card from "components/block/Card.vue";
import {useP2PStore} from "stores/p2p";
import {onMounted, ref} from "vue";
import Input from "components/element/Input.vue";
import Button from "components/element/Button.vue";
import {rupayApi} from "boot/axios";
import {useToast} from "src/composables/useToast";
const {getP2PUser} = useP2PStore()
const p2pStore = useP2PStore()
const {toast, Icon, Color} = useToast()

const activeTab = ref('main')
const amount = ref(null)
const loading = ref(false)
onMounted(async ()=>{
  await getP2PUser()
})

const poolAction = async (action) => {
  loading.value = !loading.value
  const {data} = await rupayApi.post('/api/p2p/pool_action',{action,amount:amount.value, wallet:p2pStore.p2pUser.wallet})
  if (data.success){
    toast(data.message,Icon.success,Color.success)
    await getP2PUser()
  }else {
    toast(data.message,Icon.error,Color.error)
  }
  amount.value = null
  loading.value = !loading.value
}
</script>

<template>
  <q-page padding>
    <Card title="Trading Pool">
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
            <q-tab no-caps name="new_offer" label="Пополнения" />
            <q-tab no-caps name="own" label="Выводы" />

          </q-tabs>
          <q-separator/>
          <q-tab-panels v-model="activeTab" animated
                        class="full-height">
            <q-tab-panel  name="main" class=" ">
              <p class="q-mb-sm text-weight-medium">Баланс основной {{parseFloat(p2pStore.p2pUser?.balance_main)}} USDT</p>
              <p class="q-mb-sm text-weight-medium text-grey-8">Замороженый баланс {{parseFloat(p2pStore.p2pUser?.balance_freeze)}} USDT | Дата разморозки {{new Date(p2pStore.p2pUser.balance_unfreeze).toLocaleDateString()}}</p>

              <p class="q-mb-sm text-weight-medium">Баланс потенциальный {{parseFloat(p2pStore.p2pUser?.balance_potential)}} USDT</p>

              <p class="q-mb-sm text-weight-medium">Баланс для вывода или реинвеста {{parseFloat(p2pStore.p2pUser?.balance_withdrawal)}} USDT</p>

              <Input v-model="amount" type="number" label="Введите сумму вывода или реинвестирования"/>
              <div class="row q-col-gutter-md">
                <div class="col-6">
                  <Button disabled color="negative" class="full-width" label="Вывести"/>
                </div>
                <div class="col-6">
                  <Button :disabled="!amount" class="full-width" :loading="loading" color="positive" @click="poolAction('reinvest')" label="Реинвест"/>
                </div>
              </div>

            </q-tab-panel>
            <q-tab-panel  name="new_offer" class=" ">
              <q-list>
                <q-item v-for="item in p2pStore.p2pUser?.pool_records.filter(x=>x.is_income)" :key="item.id">
                  <q-item-section>
                    <q-item-label overline>Дата</q-item-label>
                    <q-item-label caption>{{new Date(item.created_at).toLocaleDateString()}}</q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label overline>Сумма пополнения</q-item-label>
                    <q-item-label caption>{{parseFloat(item.amount)}} USDT</q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label overline>Тип пополнения</q-item-label>
                    <q-item-label caption>{{item.action_type}}</q-item-label>
                  </q-item-section>

                </q-item>
              </q-list>
            </q-tab-panel>
            <q-tab-panel  name="own" class="">
              <q-list>
                <q-item v-for="item in p2pStore.p2pUser?.pool_records.filter(x=>x.is_outcome)" :key="item.id">
                  <q-item-section>
                    <q-item-label overline>Дата</q-item-label>
                    <q-item-label caption>{{new Date(item.created_at).toLocaleDateString()}}</q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label overline>Сумма вывода</q-item-label>
                    <q-item-label caption>{{item.amount}} USDT</q-item-label>
                  </q-item-section>

                </q-item>
              </q-list>
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
  </q-page>
</template>

<style scoped lang="sass">

</style>
