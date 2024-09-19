<template>
    <div>
      <div v-for="checkbox in checkboxes" :key="checkbox.id">
        <input 
          type="checkbox" 
          :id="checkbox.id" 
          :value="checkbox.id" 
          v-model="selectedCheckboxes"
          @change="handleCheckboxChange(checkbox)">
        <label :for="checkbox.id">{{ checkbox.label }}</label>
      </div>
      
      <div v-for="checkbox in checkboxes" :key="checkbox.id">
        <div v-if="selectedCheckboxes.includes(checkbox.id)">
          <div v-for="radio in checkbox.relatedRadioButtons" :key="radio.id">
            <input 
              type="radio" 
              :id="radio.id" 
              :name="checkbox.id" 
              :value="radio.id" 
              v-model="selectedRadioButtons">
            <label :for="radio.id">{{ radio.label }}</label>
          </div>
        </div>
      </div>
      
      <div>
        <h3>Output:</h3>
        <div v-for="checkbox in checkboxes" v-if="selectedCheckboxes.includes(checkbox.id)" :key="checkbox.id">
          <p>{{ checkbox.text }}</p>
          <div v-if="checkbox.relatedRadioButtons">
            <div v-for="radio in checkbox.relatedRadioButtons" v-if="selectedRadioButtons === radio.id" :key="radio.id">
              <p>{{ radio.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import jsonData from '/public/heste.json';
  
  export default {
    data() {
      return {
        checkboxes: jsonData.checkboxes,
        selectedCheckboxes: [],
        selectedRadioButtons: null
      };
    },
    methods: {
      handleCheckboxChange(checkbox) {
        if (!this.selectedCheckboxes.includes(checkbox.id)) {
          this.selectedRadioButtons = null; // Clear selected radio button when checkbox is unchecked
        }
      }
    }
  };
  </script>