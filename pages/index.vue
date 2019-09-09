<template>
  <div class="container">
    <content-card>
      <!-- Hiện tại chưa dùng svg nên sử dụng tạm hình icon -->
      <div slot="header">⚠️ 2週間以上ステータスを変更していない案件</div>
      <contact-logs-notification slot="body" />
      <aside class="mdc-drawer">
        <div class="mdc-drawer content">
          <nav class="mdc-list">
            <a class="mdc-list-item -activated" href="#" aria-selected="true">
              <i class="material-icons graphic" aria-hidden="true">inbox</i>
              <span class="mdc-list-item text">Inbox</span>
            </a>
            <a class="mdc-list-item" href="#">
              <i class="material-icons graphic" aria-hidden="true">star</i>
              <span class="mdc-list-item text">Star</span>
            </a>
            <a class="mdc-list-item" href="#">
              <i class="material-icons graphic" aria-hidden="true">send</i>
              <span class="mdc-list-item text">Sent Mail</span>
            </a>
            <a class="mdc-list-item" href="#">
              <i class="material-icons graphic" aria-hidden="true">drafts</i>
              <span class="mdc-list-item text">Drafts</span>
            </a>

            <hr class="mdc-list-divider" />
            <h6 class="mdc-list-group subheader">Labels</h6>
            <a class="mdc-list-item" href="#">
              <i class="material-icons graphic" aria-hidden="true">bookmark</i>
              <span class="mdc-list-item text">Family</span>
            </a>
            <a class="mdc-list-item" href="#">
              <i class="material-icons graphic" aria-hidden="true">bookmark</i>
              <span class="mdc-list-item text">Friends</span>
            </a>
            <a class="mdc-list-item" href="#">
              <i class="material-icons graphic" aria-hidden="true">bookmark</i>
              <span class="mdc-list-item text">Work</span>
            </a>
          </nav>
        </div>
      </aside>
      <button class="mdc-button -outlined">
        <i class="material-icons mdc-button__icon" aria-hidden="true"
          >favorite</i
        >
        Button
      </button>
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
