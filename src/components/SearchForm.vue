<script setup lang="ts">
import { ref } from 'vue'
import { JiraImporter, type Truc } from '../infrastructure/jira/jira.importer'

const showResults = ref(false)
const showError = ref(false)

const fileInput = ref<HTMLInputElement | null>(null)
// const csvFile = ref()

const jiraImporter = new JiraImporter()
// let resultData: Array<Truc> = []

async function onFileChanged() {
  const csvFile = fileInput.value?.files[0];
  console.log(csvFile);

  if (csvFile === null) {
    return;
  }

  await jiraImporter.getData(csvFile);
}
</script>

<template>
  <div>
    <label>Export file from Jira : </label>
    <input type="file" ref="fileInput" @change="onFileChanged" accept="csv/" capture />
  </div>

  <hr />
  <div v-if="showResults">
    Results
    <pre>{{ resultData }}</pre>
  </div>
  <div v-if="showError">Error</div>
</template>
