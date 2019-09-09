<template>
  <div class="mdc-layout-grid contact-logs-notification">
    <div class="navbar">
      <div class="summary">
        <div class="number">
          <strong>{{ totalItemCount }}</strong> 件&nbsp;
        </div>
        の案件があります。
      </div>
      <div class="mdc-card btn-card" @click="checkAllContactStatues()">
        全て確認
      </div>
    </div>
    <div class="inner">
      <contact-logs-info-card
        class="cell -span3desktop"
        v-for="(key, value, index) in contactLogs"
        :key="index"
        :contact-logs-key="key"
        :contact-logs-value="value"
      />
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
    totalItemCount: get('staffs/getTotalItemCount'),
    contactLogs: get('staffs/getContactLogs')
  },
  mounted() {
    dispatch('staffs/getContactLogSummary')
  },
  methods: {
    checkAllContactStatues() {
      console.log(56, this.getContactLogs)
    }
  }
}
</script>
