<!-- 

  폼:
  @submit.prevent="submitData":
  폼이 제출될 때 페이지 새로고침을 방지하고 submitData 메서드를 호출합니다.
  입력 필드:
  **ref**를 사용해 DOM 요소를 참조(titleInput, descInput, linkInput).
  사용자 입력 값을 가져오기 위해 사용됩니다.
  버튼:
  base-button은 제출 버튼을 나타내며, type="submit"으로 설정.
-->
<template>
  <teleport to="body">
    <base-dialog
      v-if="inputIsvalid"
      title="Invalid Input"
      @close="confirmError"
    >
      <template #default>
        <p>Unfortunately, at least one input value is invalid</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </template>
      <template #actions>
        <base-button @click="confirmError">Ok</base-button>
      </template>
    </base-dialog>
  </teleport>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input name="title" id="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          ref="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input name="link" id="link" type="url" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit"> Add resource </base-button>
      </div>
    </form>
  </base-card>
</template>
<script>
export default {
  inject: ['addResource'], // 부모 컴포넌트로부터 메서드 주입
  data() {
    return {
      inputIsvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredUrl.trim() === ''
      ) {
        this.inputIsvalid = true;
        return;
      }

      // 부모 컴포넌트의 addResource 메서드를 호출
      this.addResource(enteredTitle, enteredDescription, enteredUrl);
    },
    confirmError() {
      this.inputIsvalid = false;
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>

<!-- 

submitData 메서드:
ref를 통해 사용자가 입력한 값을 가져옴.
부모 컴포넌트의 addResource 메서드를 호출해 데이터를 저장.
inject:
부모 컴포넌트로부터 addResource 메서드를 주입받아 사용.
 -->
