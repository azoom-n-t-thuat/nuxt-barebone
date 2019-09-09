<template>
  <div class="container">
    <content-card>
      <div slot="header" class="-alignmiddle">
        <img class="icon" src="@/assets/svg/warning.svg" />
        <span>2週間以上ステータスを変更していない案件</span>
      </div>
      <contact-logs-notification slot="body" />
    </content-card>
  </div>
</template>

<script>
import ContentCard from '~/components/home-page/content-card.vue'
import ContactLogsNotification from '~/components/home-page/contact-logs-notification.vue'

export default {
  components: {
    ContentCard,
    ContactLogsNotification
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #eeeeee;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
