<script setup lang="ts">
import Card from "components/block/Card.vue";
import {useP2PStore} from "stores/p2p";
const {p2pUser} = useP2PStore()

</script>

<template>
  <q-page padding>
    <Card title="Trading Pool">
      <template v-if="p2pUser?.in_trading_pool">
        in pool
      </template>
      <template v-else>
        <p class="text-center">В разработке</p>
      </template>


    </Card>
  </q-page>
</template>

<style scoped lang="sass">

</style>
