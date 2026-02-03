<script setup lang="ts">
import { ref } from 'vue'
const graphId = 'deploymentFrequency'
const graphName = ref('Deployment Frequency')
</script>

<template>
  <h2 :id="graphId">{{ graphName }}</h2>
</template>
