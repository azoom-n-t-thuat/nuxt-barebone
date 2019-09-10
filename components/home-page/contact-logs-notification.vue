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
    <aside
      id="areas-staffs"
      class="mdc-drawer -modal -right -expand"
      @keyup.esc="closeDrawer"
    >
      <div class="areas-staffs">
        <div class="mdc-top-app-bar mdc-top-app-bar-fixed -primary">
          <div class="row">
            <section class="section -alignstart">
              <button class="navicon" @click="closeDrawer">
                <img class="icon" src="@/assets/svg/close.svg" />
              </button>
              <h1 class="title">2週間以上ステータス変更されていない案件</h1>
            </section>
          </div>
        </div>
      </div>
    </aside>
    <div class="mdc-drawer-scrim"></div>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
import { MDCDrawer } from '@rsmdc/drawer'
import { get, dispatch } from 'vuex-pathify'
import contactLogsInfoCard from '~/components/home-page/contact-logs-info-card.vue'
export default {
  components: {
    contactLogsInfoCard
  },
  computed: {
    totalItemCount: get('staffs/getTotalItemCount'),
    contactLogs: get('staffs/getContactLogs'),
    isShowAreasStaffs: sync('ui/areasStaffs@isShow')
  },
  watch: {
    isShowAreasStaffs(value) {
      this.searchAreasStaffsDrawer.open = value
      value
        ? document.body.classList.add('-notscroll')
        : document.body.classList.remove('-notscroll')
    }
  },
  mounted() {
    dispatch('staffs/getContactLogSummary')
    this.searchAreasStaffsDrawer = new MDCDrawer(
      document.getElementById('areas-staffs')
    )
    this.searchAreasStaffsDrawer.open = this.isShowAreasStaffs
  },
  methods: {
    checkAllContactStatuses() {
      this.isShowAreasStaffs = true
    },
    closeDrawer() {
      this.isShowAreasStaffs = false
    }
  }
}
</script>
