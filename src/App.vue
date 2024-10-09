<template>
  <div class="machine">
    <div class="questions">
      <div class="group">
        <h1>Pligttekster på cards</h1>
        <p>
          Vi har lavet en pligttekst generator der omfavner de nødvendige pligttekster
          formuleret som Semler ønsker.
        </p>
      </div>
      
      <!-- carGroup -->
      <div v-if="carGroupCheckbox">
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

      <!-- carFormat -->
      <div v-if="carTypeGroupCheckbox.selectedRadio != '' || carTypeSpecificCheckbox.selectedRadio != ''">
        <input id="carFormat" type="checkbox" v-model="carFormatCheckbox.checked" disabled />
        <label for="carFormat">{{ carFormatCheckbox.label }}</label>

        <transition>
          <div v-if="carFormatCheckbox.radios && carFormatCheckbox.checked">
            <div v-for="(radio, radioIndex) in carFormatCheckbox.radios" :key="'radio-' + radioIndex">
              <input
                :id="'radio-carFormat' + index + '-' + radioIndex"
                type="radio"
                :name="'radio-group-carFormat' + index"
                :value="radio.selected"
                v-model="carFormatCheckbox.selectedRadio"
              />
              <label :for="'radio-carFormat' + index + '-' + radioIndex">{{ radio.label }}</label>
            </div>
          </div>
        </transition>
      </div>
      
      
      <!-- carStatus -->
      <div v-if="carFormatCheckbox.selectedRadio != ''">
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

  import { ref, computed, onMounted } from 'vue';
  
  export default {
    setup() {
      const carGroupCheckbox = ref({});
      
      const carImageGroupCheckbox = ref({});
      const carImageSpecificCheckbox = ref({});

      const carTypeGroupCheckbox = ref({});
      const carTypeSpecificCheckbox = ref({});
      
      const carFormatCheckbox = ref({});
      const carStatusCheckbox = ref({});

      const carInsuranceCheckbox = ref({});
  
      onMounted(async () => {
        try {
          const response = await fetch('../checkboxes.json');
          const data = await response.json();

          carGroupCheckbox.value = data.carGroup;
          carImageGroupCheckbox.value = data.carImageGroup;
          carImageSpecificCheckbox.value = data.carImageSpecific;
          carTypeGroupCheckbox.value = data.carTypeGroup;
          carTypeSpecificCheckbox.value = data.carTypeSpecific;
          carFormatCheckbox.value = data.carFormat;
          carStatusCheckbox.value = data.carStatus;
          
          carInsuranceCheckbox.value = data.carInsurance;

        } catch (error) {
          console.error('Error loading checkboxes:', error);
        }
      });

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

        if (carFormatCheckbox.value.checked) {
          const radio = carFormatCheckbox.value.radios.find(radio => radio.selected == carFormatCheckbox.value.selectedRadio);
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

        return text;
      });
  
      return {
        carGroupCheckbox,
        carImageGroupCheckbox,
        carImageSpecificCheckbox,
        carTypeGroupCheckbox,
        carTypeSpecificCheckbox,
        carFormatCheckbox,
        carStatusCheckbox,
        carInsuranceCheckbox,

        combinedText,
      };
    },
  };
  </script>