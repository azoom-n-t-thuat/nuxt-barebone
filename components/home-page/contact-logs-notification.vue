<template>
  <div class="contact-logs-notification">
    <div class="navbar">
      <div class="summary">
        <div class="number">{{ getContactLogSummary }} 件</div>
        の案件があります。
      </div>
      <div class="mdc-card btn-card" @click="checkAll()">
        全て確認
      </div>
    </div>
    <div class="content">
      <contact-logs-info-card
        v-for="(key, value, index) in getContactLogs"
        :key="index"
        :contactLogsKey="key"
        :contactLogsValue="value"
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
