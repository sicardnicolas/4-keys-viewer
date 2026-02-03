<script setup lang="ts">
import { ref } from 'vue'
import { JiraHttpClient, type Truc } from '../infrastructure/jira/jira.http-client'

const showResults = ref(false)
const showError = ref(false)

const projectName = ref('')
const startMonth = ref('')
const startYear = ref('')
const endMonth = ref('')
const endYear = ref('')

const jiraHttpClient = new JiraHttpClient()
let resultData: Array<Truc> = []

async function postForm() {
  jiraHttpClient
    .getData(
      projectName.value,
      parseInt(startMonth.value),
      parseInt(startYear.value),
      parseInt(endMonth.value),
      parseInt(endYear.value),
    )
    .then((result: Array<Truc>) => {
      resultData = result
      showResults.value = true
      showError.value = false
    })
    .catch(() => {
      showResults.value = false
      showError.value = true
    })
}
</script>

<template>
  <form @submit.prevent="postForm">
    <div>
      <label>Project</label>
      <select v-model="projectName" required>
        <option value="push">Push</option>
        <option value="retailMedia">Retail Media</option>
      </select>
    </div>
    <div>
      <label>Start Date</label>
      <input type="number" required min="1" max="12" placeholder="1" v-model="startMonth" />
      <input type="number" required min="2000" max="2100" placeholder="2025" v-model="startYear" />
    </div>
    <div>
      <label for="endMonth">End Date</label>
      <input type="number" required min="1" max="12" placeholder="12" v-model="endMonth" />
      <input type="number" required min="2000" max="2100" placeholder="2026" v-model="endYear" />
    </div>
    <div>
      <button>Display</button>
    </div>
  </form>

  <hr />
  <div v-if="showResults">
    Results
    <pre>{{ resultData }}</pre>
  </div>
  <div v-if="showError">Error</div>
</template>
