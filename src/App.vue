<template>
    <div>
      <h1>Pligttekster</h1>
      <div v-if="carImageCheckbox">
        <input id="carImage" type="checkbox" v-model="carImageCheckbox.checked" />
        <label for="carImage">{{ carImageCheckbox.label }}</label>

        <transition>
          <div v-if="carImageCheckbox.radios && carImageCheckbox.checked">
            <div v-for="(radio, radioIndex) in carImageCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carImage' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carImage' + index"
                :value="radio.selected"
                v-model="carImageCheckbox.selectedRadio"
              />
              <label :for="'radio-carImage' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>

      <div v-if="carTypeCheckbox">
        <input id="carType" type="checkbox" v-model="carTypeCheckbox.checked" />
        <label for="carType">{{ carTypeCheckbox.label }}</label>

        <transition>
          <div v-if="carTypeCheckbox.radios && carTypeCheckbox.checked">
            <div v-for="(radio, radioIndex) in carTypeCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carType' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carType' + index"
                :value="radio.selected"
                v-model="carTypeCheckbox.selectedRadio"
              />
              <label :for="'radio-carType' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>

      <div v-if="carLeasingCheckbox">
        <input id="carLeasing" type="checkbox" v-model="carLeasingCheckbox.checked" />
        <label for="carLeasing">{{ carLeasingCheckbox.label }}</label>
      </div>

      <div v-if="carBTOCheckbox">
        <input id="carBTO" type="checkbox" v-model="carBTOCheckbox.checked" />
        <label for="carBTO">{{ carBTOCheckbox.label }}</label>
      </div>

      <div v-if="carFinancingCheckbox">
        <input id="carFinancing" type="checkbox" v-model="carFinancingCheckbox.checked" />
        <label for="carFinancing">{{ carFinancingCheckbox.label }}</label>
      </div>

      <div v-if="carInsuranceCheckbox">
        <input id="carInsurance" type="checkbox" v-model="carInsuranceCheckbox.checked" />
        <label for="carInsurance">{{ carInsuranceCheckbox.label }}</label>
      </div>
    </div>

    <transition appear>
      <div v-if="combinedText">
        <p><b>Genereret tekst:</b></p>
        <div class="generated-text">
            <transition appear mode="out-in">
              <p :key="combinedText" v-html="combinedText"></p>
            </transition>
        </div>
      </div>
    </transition>
      
  </template>
  
  <script>

  import { ref, computed, onMounted } from 'vue';
  
  export default {
    setup() {
      const carImageCheckbox = ref({});
      const carTypeCheckbox = ref({});
      const carLeasingCheckbox = ref({});
      const carBTOCheckbox = ref({});
      const carFinancingCheckbox = ref({});
      const carInsuranceCheckbox = ref({});
  
      onMounted(async () => {
        try {
          const response = await fetch('../public/checkboxes.json');
          const data = await response.json();

          carImageCheckbox.value = data.carImage;
          carTypeCheckbox.value = data.carType;
          carLeasingCheckbox.value = data.carLeasing;
          carBTOCheckbox.value = data.carBTO;
          carFinancingCheckbox.value = data.carFinancing;
          carInsuranceCheckbox.value = data.carInsurance;

        } catch (error) {
          console.error('Error loading checkboxes:', error);
        }
      });

      const combinedText = computed(() => {

        let text = '';

        if (carImageCheckbox.value.checked) {
          const radio = carImageCheckbox.value.radios.find(radio => radio.selected == carImageCheckbox.value.selectedRadio);
          if (radio && radio.value) { text += radio.value + ' '; }
        }

        if (carTypeCheckbox.value.checked) {
          const radio = carTypeCheckbox.value.radios.find(radio => radio.selected == carTypeCheckbox.value.selectedRadio);
          if (radio) { text += radio.value + ' '; }
        }

        if (carLeasingCheckbox.value.checked) {
          text += carLeasingCheckbox.value.disclaimerText + ' ';
        }

        if (carBTOCheckbox.value.checked) {
          text += carBTOCheckbox.value.disclaimerText + ' ';
        }

        if (carFinancingCheckbox.value.checked) {
          text += carFinancingCheckbox.value.disclaimerText + ' ';
        }

        if (carInsuranceCheckbox.value.checked) {
          text += carInsuranceCheckbox.value.disclaimerText + ' ';
        }

        return text;
      });
  
      return {
        carImageCheckbox,
        carTypeCheckbox,
        carLeasingCheckbox,
        carBTOCheckbox,
        carFinancingCheckbox,
        carInsuranceCheckbox,

        combinedText,
      };
    },
  };
  </script>