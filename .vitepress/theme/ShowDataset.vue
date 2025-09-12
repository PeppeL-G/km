<script setup lang="ts">
	
	import { computed, reactive } from 'vue'
	
	const {
		datasetName = ``,
	} = defineProps<{
		datasetName: string,
	}>()
	
	const state = reactive({
		hasLoadedData: false,
		dataObjects: [],
	})
	
	const columnNames = computed(() => {
		return Object.getOwnPropertyNames(state.dataObjects[0] ?? {})
	})
	
	async function loadData(){
		
		const response = await fetch(`/km/datasets/${datasetName}.json`)
		
		state.dataObjects = await response.json()
		
		state.hasLoadedData = true
		
	}
	
	function sort(columnName){
		state.dataObjects.sort(
			(a, b) => {
				
				if(typeof a[columnName] == `string`){
					return a[columnName].localeCompare(b[columnName])
				}
				
				return a[columnName] - b[columnName]
				
			}
		)
	}
	
</script>

<template>
	
	<button v-if="!state.hasLoadedData" @click="loadData()">
		Ladda dataset {{datasetName}}
	</button>
	
	<div v-if="state.hasLoadedData" class="tableContainer">
		
		<p>Dataset {{datasetName}}</p>
		
		<table>
			
			<thead>
				<tr>
					<th
						v-for="columnName in columnNames"
						@click="sort(columnName)"
					>
						{{columnName}}
					</th>
				</tr>
			</thead>
			
			<tbody>
				<tr v-for="dataObject in state.dataObjects">
					<td v-for="columnName in columnNames">
						{{dataObject[columnName]}}
					</td>
				</tr>
			</tbody>
			
		</table>
		
	</div>
	
</template>

<style scoped>
	
	.tableContainer{
		max-height: 60vh;
		overflow: auto;
		background-color: aliceblue;
		text-align: center;
	}
	
	.tableContainer table{
		display: inline-block;
	}
	
</style>