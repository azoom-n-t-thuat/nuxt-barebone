<template>
  <div class="contact-logs-notification mdc-layout-grid">
    <div class="navbar">
      <div class="summary">
        <div class="number">{{ getContactLogSummary }} 件&nbsp;</div>
        の案件があります。
      </div>
      <div class="mdc-card btn-card" @click="checkAll()">
        全て確認
      </div>
    </div>
    <div class="inner">
      <contact-logs-info-card
        class="cell -span3desktop -span4tablet -span4phone"
        v-for="(key, value, index) in getContactLogs"
        :key="index"
        :contact-logs-key="key"
        :contact-logs-value="value"
      >
      </contact-logs-info-card>
    </div>
  </div>
</template>

<script>
import { get, dispatch } from 'vuex-pathify'
import ContactLogsInfoCard from '~/components/home-page/contact-logs-info-card.vue'
export default {
  components: {
    ContactLogsInfoCard
  },
  computed: {
    getContactLogSummary: get('staffs/getTotalItemCount'),
    getContactLogs: get('staffs/getContactLogs')
  },
  mounted() {
    dispatch('staffs/getContactLogSummary')
  },
  methods: {
    checkAll() {
      console.log(56, this.getContactLogs)
    }
  }
}
</script>
