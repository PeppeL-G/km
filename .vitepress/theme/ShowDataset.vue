<script setup lang="ts">
	
	import { computed, onUnmounted, reactive } from 'vue'
	import { Chart, ScatterController, LinearScale, PointElement, Title } from 'chart.js'
	
	// Register the elements and scales you need
	Chart.register(ScatterController, LinearScale, PointElement, Title);
	
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
	
	function sort(columnName=`random`){
		
		if(columnName == `random`){
			
			state.dataObjects.sort(
				() => 0.5 - Math.random()
			)
			
		}else{
			
			state.dataObjects.sort(
				(a, b) => {
					
					if(typeof a[columnName] == `string`){
						return a[columnName].localeCompare(b[columnName])
					}
					
					return a[columnName] - b[columnName]
					
				}
			)
			
		}
		
	}
	
	const vGraph = {
		mounted(canvas){
			
			const context = canvas.getContext('2d')
			
			canvas.chart = new Chart(context, {
				type: 'scatter',
				data: {
					datasets: [{
						label: 'Exempeldata',
						data: [
							{ x: 1, y: 2 },
							{ x: 2, y: 4 },
							{ x: 3, y: 1 },
							{ x: 4, y: 3 }
						],
						backgroundColor: 'rgba(75, 192, 192, 0.6)'
					}]
				},
				options: {
					scales: {
						x: { title: { display: true, text: 'X-axel' } },
						y: { title: { display: true, text: 'Y-axel' } }
					}
				}
			});
			
		},
		onUnmounted(canvas){
			canvas.chart.destroy()
		},
	}
	
</script>

<template>
	
	
	<button v-if="!state.hasLoadedData" @click="loadData()">
		Ladda dataset {{datasetName}}
	</button>
	
	<div v-if="state.hasLoadedData" class="tableContainer">
		
		<div>Dataset {{datasetName}}</div>
		
		<img v-if="datasetName == `iris`" :src="`/km/datasets/${datasetName}.png`">
		
		<p v-if="datasetName == `ages`">En människa under 18 år är <code>barn</code>, mellan 18 och 67 är <code>vuxen</code>, och 67 och äldre är <code>pensionar</code>.</p>
		
		<div style="padding: 0.5em;"><a :href="`/km/datasets/${datasetName}.csv`">Ladda ner dataset i CSV-format</a></div>
		
		<table>
			
			<thead>
				<tr>
					<th
						v-for="columnName in columnNames"
						@click="sort(columnName)"
					>
						{{columnName}}
					</th>
					<th @click="sort(`random`)">
						Random
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
		
		<!--
		<canvas v-graph width="400" height="200"></canvas>
		-->
	</div>
	
</template>

<style scoped>
	
	.tableContainer{
		max-height: 60vh;
		overflow: auto;
		background-color: aliceblue;
		text-align: center;
		padding: 1em;
	}
	
	.tableContainer table{
		display: inline-block;
	}
	
	
	.tableContainer table th{
		cursor: pointer;
	}
	
	button{
		background-color: #d0d0d0;   /* Grön bakgrund */
		color: black;                /* Vit text */
		padding: 12px 24px;          /* Inre marginaler */
		border: none;                /* Ingen kantlinje */
		border-radius: 8px;          /* Rundade hörn */
		font-size: 16px;             /* Textstorlek */
		cursor: pointer;             /* Handpekare vid hover */
		transition: background-color 0.3s ease, transform 0.2s ease;
	}
	
	/* Effekt vid hover */
	button:hover {
		transform: scale(1.05);
	}
	
	p{
		text-align: left;
	}
	
	canvas{
		background-color: white;
	}
	
</style>