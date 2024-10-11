<template>
  <div class="machine">
    <div class="questions">
      <div class="group">
        <h1>Pligttekster på cards</h1>
        <p>
          Vi har lavet en pligttekst generator der omfavner de nødvendige pligttekster
          formuleret som Semler ønsker. <br><br>
          Indeholder card'et dele af pligtteksten, så kan disse oplysninger fjernes fra pligtteksten.
        </p>
      </div>
      
      <!-- carBrand -->
      <div v-if="carBrandCheckbox">
        <input id="carBrand" type="checkbox" v-model="carBrandCheckbox.checked" disabled />
        <label for="carBrand">{{ carBrandCheckbox.label }}</label>

        <transition>
          <div v-if="carBrandCheckbox.radios && carBrandCheckbox.checked">
            <div v-for="(radio, radioIndex) in carBrandCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carBrand' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carBrand' + index"
                :value="radio.selected"
                v-model="carBrandCheckbox.selectedRadio"
              />
              <label :for="'radio-carBrand' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>

      <!-- carGroup -->
      <div v-if="carBrandCheckbox.selectedRadio != ''">
        <input id="carGroup" type="checkbox" v-model="carGroupCheckbox.checked" disabled />
        <label for="carGroup">{{ carGroupCheckbox.label }}</label>

        <transition>
          <div v-if="carGroupCheckbox.radios && carGroupCheckbox.checked">
            <div v-for="(radio, radioIndex) in carGroupCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carGroup' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carGroup' + index"
                :value="radio.selected"
                v-model="carGroupCheckbox.selectedRadio"
              />
              <label :for="'radio-carGroup' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>

      <!-- carImageGroup -->
      <div v-if="carGroupCheckbox.selectedRadio === 'group'">
        <input id="carImageGroup" type="checkbox" v-model="carImageGroupCheckbox.checked" disabled />
        <label for="carImageGroup">{{ carImageGroupCheckbox.label }}</label>

        <transition>
          <div v-if="carImageGroupCheckbox.radios && carImageGroupCheckbox.checked">
            <div v-for="(radio, radioIndex) in carImageGroupCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carImageGroup' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carImageGroup' + index"
                :value="radio.selected"
                v-model="carImageGroupCheckbox.selectedRadio"
              />
              <label :for="'radio-carImageGroup' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>
      
      <!-- carImageSpecific -->
      <div v-if="carGroupCheckbox.selectedRadio === 'specific'">
        <input id="carImageSpecific" type="checkbox" v-model="carImageSpecificCheckbox.checked" disabled />
        <label for="carImageSpecific">{{ carImageSpecificCheckbox.label }}</label>

        <transition>
          <div v-if="carImageSpecificCheckbox.radios && carImageSpecificCheckbox.checked">
            <div v-for="(radio, radioIndex) in carImageSpecificCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carImageSpecific' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carImageSpecific' + index"
                :value="radio.selected"
                v-model="carImageSpecificCheckbox.selectedRadio"
              />
              <label :for="'radio-carImageSpecific' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>
      
      <!-- carTypeGroup -->
      <div v-if="carGroupCheckbox.selectedRadio === 'group' && (carImageGroupCheckbox.selectedRadio != '' || carImageSpecificCheckbox.selectedRadio != '')">
        <input id="carTypeGroup" type="checkbox" v-model="carTypeGroupCheckbox.checked" disabled />
        <label for="carTypeGroup">{{ carTypeGroupCheckbox.label }}</label>

        <transition>
          <div v-if="carTypeGroupCheckbox.radios && carTypeGroupCheckbox.checked">
            <div v-for="(radio, radioIndex) in carTypeGroupCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carTypeGroup' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carTypeGroup' + index"
                :value="radio.selected"
                v-model="carTypeGroupCheckbox.selectedRadio"
              />
              <label :for="'radio-carTypeGroup' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>

      <!-- carTypeSpecific -->
      <div v-if="carGroupCheckbox.selectedRadio === 'specific' && (carImageGroupCheckbox.selectedRadio != '' || carImageSpecificCheckbox.selectedRadio != '')">
        <input id="carTypeSpecific" type="checkbox" v-model="carTypeSpecificCheckbox.checked" disabled />
        <label for="carTypeSpecific">{{ carTypeSpecificCheckbox.label }}</label>

        <transition>
          <div v-if="carTypeSpecificCheckbox.radios && carTypeSpecificCheckbox.checked">
            <div v-for="(radio, radioIndex) in carTypeSpecificCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carTypeSpecific' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carTypeSpecific' + index"
                :value="radio.selected"
                v-model="carTypeSpecificCheckbox.selectedRadio"
              />
              <label :for="'radio-carTypeSpecific' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>

      <!-- carFormatGroup -->
      <div v-if="carBrandCheckbox.selectedRadio !== 'audi' && carGroupCheckbox.selectedRadio === 'group' && (carTypeGroupCheckbox.selectedRadio != '' || carTypeSpecificCheckbox.selectedRadio != '')">
        <input id="carFormatGroup" type="checkbox" v-model="carFormatGroupCheckbox.checked" disabled />
        <label for="carFormatGroup">{{ carFormatGroupCheckbox.label }}</label>

        <transition>
          <div v-if="carFormatGroupCheckbox.radios && carFormatGroupCheckbox.checked">
            <div v-for="(radio, radioIndex) in carFormatGroupCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carFormatGroup' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carFormatGroup' + index"
                :value="radio.selected"
                v-model="carFormatGroupCheckbox.selectedRadio"
              />
              <label :for="'radio-carFormatGroup' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>

      <!-- carFormatGroupAudi -->
      <div v-if="carBrandCheckbox.selectedRadio === 'audi' && carGroupCheckbox.selectedRadio === 'group' && (carTypeGroupCheckbox.selectedRadio != '' || carTypeSpecificCheckbox.selectedRadio != '')">
        <input id="carFormatGroupAudi" type="checkbox" v-model="carFormatGroupAudiCheckbox.checked" disabled />
        <label for="carFormatGroupAudi">{{ carFormatGroupAudiCheckbox.label }}</label>

        <transition>
          <div v-if="carFormatGroupAudiCheckbox.radios && carFormatGroupAudiCheckbox.checked">
            <div v-for="(radio, radioIndex) in carFormatGroupAudiCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carFormatGroupAudi' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carFormatGroupAudi' + index"
                :value="radio.selected"
                v-model="carFormatGroupAudiCheckbox.selectedRadio"
              />
              <label :for="'radio-carFormatGroupAudi' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>

      <!-- carFormatSpecific -->
      <div v-if="carBrandCheckbox.selectedRadio !== 'audi' && carGroupCheckbox.selectedRadio === 'specific' && (carTypeGroupCheckbox.selectedRadio != '' || carTypeSpecificCheckbox.selectedRadio != '')">
        <input id="carFormatSpecific" type="checkbox" v-model="carFormatSpecificCheckbox.checked" disabled />
        <label for="carFormatSpecific">{{ carFormatSpecificCheckbox.label }}</label>

        <transition>
          <div v-if="carFormatSpecificCheckbox.radios && carFormatSpecificCheckbox.checked">
            <div v-for="(radio, radioIndex) in carFormatSpecificCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carFormatSpecific' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carFormatSpecific' + index"
                :value="radio.selected"
                v-model="carFormatSpecificCheckbox.selectedRadio"
              />
              <label :for="'radio-carFormatSpecific' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>

      <!-- carFormatSpecificAudi -->
      <div v-if="carBrandCheckbox.selectedRadio === 'audi' && carGroupCheckbox.selectedRadio === 'specific' && (carTypeGroupCheckbox.selectedRadio != '' || carTypeSpecificCheckbox.selectedRadio != '')">
        <input id="carFormatSpecificAudi" type="checkbox" v-model="carFormatSpecificAudiCheckbox.checked" disabled />
        <label for="carFormatSpecificAudi">{{ carFormatSpecificAudiCheckbox.label }}</label>

        <transition>
          <div v-if="carFormatSpecificAudiCheckbox.radios && carFormatSpecificAudiCheckbox.checked">
            <div v-for="(radio, radioIndex) in carFormatSpecificAudiCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carFormatSpecificAudi' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carFormatSpecificAudi' + index"
                :value="radio.selected"
                v-model="carFormatSpecificAudiCheckbox.selectedRadio"
              />
              <label :for="'radio-carFormatSpecificAudi' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>
      
      <!-- carStatus -->
      <div v-if="carFormatGroupCheckbox.selectedRadio != '' || carFormatSpecificCheckbox.selectedRadio != '' || carFormatGroupAudiCheckbox.selectedRadio != '' || carFormatSpecificAudiCheckbox.selectedRadio != ''">
        <input id="carStatus" type="checkbox" v-model="carStatusCheckbox.checked" disabled />
        <label for="carStatus">{{ carStatusCheckbox.label }}</label>

        <transition>
          <div v-if="carStatusCheckbox.radios && carStatusCheckbox.checked">
            <div v-for="(radio, radioIndex) in carStatusCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carStatus' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carStatus' + index"
                :value="radio.selected"
                v-model="carStatusCheckbox.selectedRadio"
              />
              <label :for="'radio-carStatus' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>

      <!-- carInsurance -->
      <div v-if="carStatusCheckbox.selectedRadio != ''">
        <input id="carInsurance" type="checkbox" v-model="carInsuranceCheckbox.checked" disabled />
        <label for="carInsurance">{{ carInsuranceCheckbox.label }}</label>

        <transition>
          <div v-if="carInsuranceCheckbox.radios && carInsuranceCheckbox.checked">
            <div v-for="(radio, radioIndex) in carInsuranceCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carInsurance' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carInsurance' + index"
                :value="radio.selected"
                v-model="carInsuranceCheckbox.selectedRadio"
              />
              <label :for="'radio-carInsurance' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>

    </div>

    <transition appear>
      <div v-if="combinedText" class="render">
        <p><b>Genereret tekst:</b></p>
        <div class="generated-text">
            <transition appear mode="out-in">
              <p :key="combinedText" v-html="combinedText"></p>
            </transition>
        </div>
      </div>
    </transition>
  </div>
  </template>
  
  <script>

  import { ref, computed, onMounted, watch } from 'vue';
  
  export default {
    setup() {
      const carBrandCheckbox = ref({});
      const carGroupCheckbox = ref({});
      const carImageGroupCheckbox = ref({});
      const carImageSpecificCheckbox = ref({});
      const carTypeGroupCheckbox = ref({});
      const carTypeSpecificCheckbox = ref({});
      const carFormatGroupCheckbox = ref({});
      const carFormatGroupAudiCheckbox = ref({});
      const carFormatSpecificCheckbox = ref({});
      const carFormatSpecificAudiCheckbox = ref({});
      const carStatusCheckbox = ref({});
      const carInsuranceCheckbox = ref({});
  
      onMounted(async () => {
        try {
          // Use import.meta.env.BASE_URL to make sure the path works correctly in the subdirectory
          const response = await fetch(`${import.meta.env.BASE_URL}checkboxes.json`);
          const data = await response.json();

          // const response = await fetch('../checkboxes.json');
          // const data = await response.json();

          carBrandCheckbox.value = data.carBrand;
          carGroupCheckbox.value = data.carGroup;
          carImageGroupCheckbox.value = data.carImageGroup;
          carImageSpecificCheckbox.value = data.carImageSpecific;
          carTypeGroupCheckbox.value = data.carTypeGroup;
          carTypeSpecificCheckbox.value = data.carTypeSpecific;
          carFormatGroupCheckbox.value = data.carFormatGroup;
          carFormatGroupAudiCheckbox.value = data.carFormatGroupAudi;
          carFormatSpecificCheckbox.value = data.carFormatSpecific;
          carFormatSpecificAudiCheckbox.value = data.carFormatSpecificAudi;
          carStatusCheckbox.value = data.carStatus;
          
          carInsuranceCheckbox.value = data.carInsurance;

        } catch (error) {
          console.error('Error loading checkboxes:', error);
        }
      });

    const resetDependentFields = () => {
      carImageGroupCheckbox.value.selectedRadio = '';
      carImageSpecificCheckbox.value.selectedRadio = '';
      carTypeGroupCheckbox.value.selectedRadio = '';
      carTypeSpecificCheckbox.value.selectedRadio = '';
      carFormatGroupCheckbox.value.selectedRadio = '';
      carFormatGroupAudiCheckbox.value.selectedRadio = '';
      carFormatSpecificCheckbox.value.selectedRadio = '';
      carFormatSpecificAudiCheckbox.value.selectedRadio = '';
      carStatusCheckbox.value.selectedRadio = '';
      carInsuranceCheckbox.value.selectedRadio = '';
    };

    // Watch for changes in carBrandCheckbox and carGroupCheckbox
    watch(
      () => carBrandCheckbox.value.selectedRadio,
      (newValue, oldValue) => {
        if (newValue !== oldValue && newValue !== undefined && newValue !== null) {
          resetDependentFields();
          carGroupCheckbox.value.selectedRadio = '';
        }
      }
    );

    watch(
      () => carGroupCheckbox.value.selectedRadio,
      (newValue, oldValue) => {
        if (newValue !== oldValue && newValue !== undefined && newValue !== null) {
          resetDependentFields();
        }
      }
    );

      const combinedText = computed(() => {

        let text = '';

        if (carImageGroupCheckbox.value.checked) {
          const radio = carImageGroupCheckbox.value.radios.find(radio => radio.selected == carImageGroupCheckbox.value.selectedRadio);
          if (radio && radio.value) { text += radio.value + ' '; }
        }

        if (carTypeGroupCheckbox.value.checked) {
          const radio = carTypeGroupCheckbox.value.radios.find(radio => radio.selected == carTypeGroupCheckbox.value.selectedRadio);
          if (radio) { text += radio.value + ' '; }
        }

        if (carImageSpecificCheckbox.value.checked) {
          const radio = carImageSpecificCheckbox.value.radios.find(radio => radio.selected == carImageSpecificCheckbox.value.selectedRadio);
          if (radio && radio.value) { text += radio.value + ' '; }
        }
        
        if (carTypeSpecificCheckbox.value.checked) {
          const radio = carTypeSpecificCheckbox.value.radios.find(radio => radio.selected == carTypeSpecificCheckbox.value.selectedRadio);
          if (radio) { text += radio.value + ' '; }
        }

        if (carFormatGroupCheckbox.value.checked) {
          const radio = carFormatGroupCheckbox.value.radios.find(radio => radio.selected == carFormatGroupCheckbox.value.selectedRadio);
          if (radio) { text += radio.value + ' '; }
        }

        if (carFormatGroupAudiCheckbox.value.checked) {
          const radio = carFormatGroupAudiCheckbox.value.radios.find(radio => radio.selected == carFormatGroupAudiCheckbox.value.selectedRadio);
          if (radio) { text += radio.value + ' '; }
        }

        if (carFormatSpecificCheckbox.value.checked) {
          const radio = carFormatSpecificCheckbox.value.radios.find(radio => radio.selected == carFormatSpecificCheckbox.value.selectedRadio);
          if (radio) { text += radio.value + ' '; }
        }

        if (carFormatSpecificAudiCheckbox.value.checked) {
          const radio = carFormatSpecificAudiCheckbox.value.radios.find(radio => radio.selected == carFormatSpecificAudiCheckbox.value.selectedRadio);
          if (radio) { text += radio.value + ' '; }
        }

        if (carStatusCheckbox.value.checked) {
          const radio = carStatusCheckbox.value.radios.find(radio => radio.selected == carStatusCheckbox.value.selectedRadio);
          if (radio) { text += radio.value + ' '; }
        }

        if (carInsuranceCheckbox.value.checked) {
          const radio = carInsuranceCheckbox.value.radios.find(radio => radio.selected == carInsuranceCheckbox.value.selectedRadio);
          if (radio) { text += radio.value + ' '; }
        }

        // Combine all selected values
        return text;
      });
  
      return {
        carBrandCheckbox,
        carGroupCheckbox,
        carImageGroupCheckbox,
        carImageSpecificCheckbox,
        carTypeGroupCheckbox,
        carTypeSpecificCheckbox,
        carFormatGroupCheckbox,
        carFormatGroupAudiCheckbox,
        carFormatSpecificCheckbox,
        carFormatSpecificAudiCheckbox,
        carStatusCheckbox,
        carInsuranceCheckbox,

        combinedText,
      };
    },
  };
  </script>