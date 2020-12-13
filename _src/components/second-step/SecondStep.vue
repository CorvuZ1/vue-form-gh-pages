<template>
  <!-- 6 blocks -->
  <fieldset class="step step2">
    <legend>Адрес</legend>

    <div class="form-item">
    <label for="second-1">Индекс</label>
    <input :class="{fail: $v.FormStep2.index.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep2.index" id="second-1" type="number" placeholder="107023">
    </div>

    <div class="form-item">
    <label for="second-2">Страна</label>
    <input :class="{fail: $v.FormStep2.country.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep2.country" id="second-2" type="text" placeholder="Россия">
    </div>

    <div class="form-item">
    <label for="second-3">Область</label>
    <input :class="{fail: $v.FormStep2.region.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep2.region" id="second-3" type="text" placeholder="Омская область">
    </div>
    
    <div class="form-item">
    <label for="second-4">Город*</label>
    <input :class="{fail: $v.FormStep2.city.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep2.city" id="second-4" type="text" placeholder="Омск">
    </div>

    <div class="form-item">
    <label for="second-5">Улица</label>
    <input :class="{fail: $v.FormStep2.street.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep2.street" id="second-5" type="text" placeholder="Жукова">
    </div>

    <div class="form-item">
    <label for="second-6">Дом</label>
    <input :class="{fail: $v.FormStep2.houseNumber.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep2.houseNumber" id="second-6" type="text" placeholder="33">
    </div>
  </fieldset>
</template>

<script>
  export default {
    props: ["FormStep2", "$v", "formStatus"]
  }
</script>