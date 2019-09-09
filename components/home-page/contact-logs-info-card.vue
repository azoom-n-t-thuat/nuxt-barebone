<template>
  <div class="contact-logs-info-card">
    <div class="mdc-card">
      <div class="info -name">{{ langs.contactStatues[contactLogsValue] }}</div>
      <div class="info -amount">
        <span class="number">{{ contactLogsKey }}</span> 件
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contactLogsKey', 'contactLogsValue'],
  data() {
    return {
      langs: {
        contactStatues: {
          receptionist: '受付',
          heard: 'ヒアリング済',
          sendAvailableMail: '空室有メール送信',
          sendAvailableMailDirectMng: '空室有メール送信（直営）',
          sendAvailableMailLeopalace: '空室有メール送信（レオパ）',
          sendFollowUpMail: '追客メール送信',
          toContact: '連絡つかず受付',
          prospects: '見込み',
          contractAdjustment: '契約調整',
          reversing: '逆引き中',
          sendFollowMail: 'フォローメール送信'
        }
      }
    }
  }
}
</script>
