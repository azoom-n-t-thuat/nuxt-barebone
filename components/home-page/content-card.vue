<template>
  <div class="content-card">
    <div class="content-card__header">
      <span>2週間以上ステータスを変更していない案件</span>
    </div>
    <div class="content-card__body">
      <div class="sum">
        <div>
          <strong
            ><span class="number">{{ sum }}</span
            >件</strong
          >
          の案件があります。
        </div>
        <div class="mdc-card btn-card">
          全て確認
        </div>
      </div>
      <div class="list-card">
        <div class="item-card" v-for="(item, idx) in list" :key="idx">
          <div class="mdc-card">
            <div class="card-name">{{ item.name }}</div>
            <div class="card-number">
              <span class="number">{{ item.number }}</span> 件
            </div>
            <contact-logs-notification title=""></contact-logs-notification>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactLogsNotification from '~/components/home-page/contact-logs-notification.vue'
export default {
  components: {
    ContactLogsNotification
  },
  data() {
    return {
      sum: 30,
      list: [
        { name: '受付', number: 1 },
        { name: 'ヒアリング済', number: 2 },
        { name: '空室有メール送信', number: 3 },
        { name: '空室有メール送信（直営）', number: 4 },
        { name: '空室有メール送信（レオパ）', number: 4 },
        { name: '追客メール送信', number: 3 },
        { name: '連絡つかず受付', number: 1 },
        { name: '見込み', number: 2 },
        { name: '契約調整', number: 2 },
        { name: '逆引き中', number: 7 },
        { name: 'フォローメール送信', number: 1 }
      ]
    }
  }
}
</script>
