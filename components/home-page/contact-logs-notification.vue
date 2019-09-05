<template>
  <div class="contact-logs-tooltip tooltip-top">{{ tooltipText }}</div>
</template>

<script>
export default {
  props: {
    tooltipText: {
      type: String,
      default: 'hoverした時'
    }
  }
}
</script>
