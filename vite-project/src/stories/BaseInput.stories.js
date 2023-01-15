import BaseInput from "../components/ui/BaseInput.vue";

// 1. 컴포넌트 스토리 기본 설정
export default {
  title: "Example/BaseInput", // 주소에 표기되는 제목
  component: BaseInput, // 사용한 컴포넌트 등록
  argTypes: {
    // 컴포넌트의 props로 스토리북에서 조작할 수 있도록 설정
    label: "",
    placeholder: "",
    onInput: {},
  },
};

// 2. 컴포넌트 템플릿 정의
const Template = (args) => ({
  components: { BaseInput },
  // args는 setup() 메서드를 통해 템플릿에 매핑되어야 함
  setup() {
    return { args };
  },
  // 그리고 `args`는 `v-bind="args"`형태로 컴포넌트에 바인딩됨
  template: '<base-input v-bind="args" />',
});

// 3. 상세 스토리를 정의
export const NameInput = Template.bind({});
NameInput.args = {
  label: "이름",
  placeholder: "이름을 입력하세요",
};
