<template>
  <!-- 5 blocks -->
  <fieldset class="step">
    <legend>Паспорт</legend>

    <div class="form-item">
    <label for="third-1">Тип документа*</label>
    <select :class="{fail: $v.FormStep3.docType.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep3.docType" id="third-1">
      <option value="Паспорт">Паспорт</option>
      <option value="Свидетельство о рождении">Свидетельство о рождении</option>
      <option value="Водительское удостоверение">Водительское удостоверение</option>
    </select>
    </div> 

    <div class="form-item">
    <label for="third-2">Серия</label>
    <input :class="{fail: $v.FormStep3.docSeries.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep3.docSeries" id="third-2" type="number" placeholder="2913">
    </div>

    <div class="form-item">
    <label for="third-3">Номер</label>
    <input :class="{fail: $v.FormStep3.docNumber.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep3.docNumber" id="third-3" type="number" placeholder="531741">
    </div>

    <div class="form-item">
    <label for="third-4">Кем выдан</label>
    <input :class="{fail: $v.FormStep3.issuedBy.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep3.issuedBy" id="third-4" type="text" placeholder="УФМС по г. Омску">
    </div>

    <div class="form-item">
    <label for="third-5">Дата выдачи*</label>
    <input :class="{fail: $v.FormStep3.issueDate.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep3.issueDate" id="third-5" type="date">
    </div>
  </fieldset>
</template>

<script>
  export default {
    props: ["FormStep3", "$v", "formStatus"]
  }
</script>