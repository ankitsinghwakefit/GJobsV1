import { shallowMount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("should render logo", () => {
    const wrapper = shallowMount(MainNav);
    // 2nd aurg of mount can accept all thing we have in script tag of vue file
    // const wrapper = shallowMount(MainNav,{
    //   data(){
    //     return{
    //       anyValue: 'property'
    //     }
    //   }
    // });

    // 3rd approach is using setData() function
    // NOTE: This is async task
    // it("should render logo",async () => {
    // const wrapper = shallowMount(MainNav);
    // await wrapper.setData({anyValue: 'property'})
    expect(wrapper.text()).toMatch("G Careers");
    // 2 approach to test text logo
    expect(wrapper.find('[data-testid="logo"]').text()).toMatch("G Careers");
  });
});
