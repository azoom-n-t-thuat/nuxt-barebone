<template>
  <div class="mdc-layout-grid contact-logs-notification">
    <div class="navbar">
      <div class="summary">
        <div class="number">
          <strong>{{ totalItemCount }}</strong> 件&nbsp;
        </div>
        の案件があります。
      </div>
      <div class="mdc-card btn-card" @click="checkAllContactStatuses()">
        全て確認
      </div>
    </div>
    <div class="inner">
      <contact-logs-info-card
        v-for="(key, value, index) in contactLogs"
        :key="index"
        :contact-logs-key="key"
        :contact-logs-value="value"
        class="cell -span3desktop"
      />
    </div>
  </div>
</template>

<script>
import { get, dispatch } from 'vuex-pathify'
import contactLogsInfoCard from '~/components/home-page/contact-logs-info-card.vue'
export default {
  components: {
    contactLogsInfoCard
  },
  computed: {
    totalItemCount: get('staffs/getTotalItemCount'),
    contactLogs: get('staffs/getContactLogs')
  },
  mounted() {
    dispatch('staffs/getContactLogSummary')
  },
  methods: {
    checkAllContactStatuses() {
      console.log(76, this.contactLogs)
    }
  }
}
</script>
