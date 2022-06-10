import { shallowMount } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";

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

  it("Should render list items of links inside navigation", () => {
    const wrapper = shallowMount(MainNav);
    const navLinkItems = wrapper.findAll("li");
    const navLinkItemsWithTest = wrapper.findAll(
      '[data-testid="nav-menu-items-list"]'
    );
    const navTextss = navLinkItemsWithTest.map((navLinkItem) =>
      navLinkItem.text()
    );
    const navTexts = navLinkItems.map((navLinkItem) => navLinkItem.text());
    // toEqual is uded to compare arrays and objects
    // toBe is used to compare premitives data types
    expect(navTexts).toEqual([
      "Teams",
      "Locations",
      "Life at G Careers",
      "Students",
      "Jobs",
    ]);
  });

  it("check render of signin button when user is logged out", () => {
    const wrapper = shallowMount(MainNav, {
      // by default this data is already available as false because it is initial state.
      data() {
        return {
          loggedin: false,
        };
      },
    });
    const loginButton = wrapper.findComponent({ name: "ActionButton" });
    const profileImage = wrapper.findComponent({ name: "ProfileImage" });
    expect(loginButton.exists()).toBe(true);
    expect(profileImage.exists()).toBe(false);
    // or ---------------- using data test id
    expect(
      wrapper.find('[data-testid="action-button-component"]').exists()
    ).toBe(true);
    expect(
      wrapper.find('[data-testid="profile-image-component"]').exists()
    ).toBe(false);
  });

  it("check render of profileImage when user is logged In", async () => {
    // const wrapper = shallowMount(MainNav, {
    //   data() {
    //     return {
    //       loggedin: true,
    //     };
    //   },
    // });
    const wrapper = shallowMount(MainNav);
    await wrapper.setData({
      loggedin: true,
    });
    const loginButton = wrapper.findComponent({ name: "ActionButton" });
    const subnav = wrapper.findComponent({ name: "Subnav" });
    const profileImage = wrapper.findComponent({ name: "ProfileImage" });
    expect(loginButton.exists()).toBe(false);
    expect(profileImage.exists()).toBe(true);
    expect(subnav.exists()).toBe(true);
    // or ---------------- using data test id
    expect(
      wrapper.find('[data-testid="action-button-component"]').exists()
    ).toBe(false);
    expect(
      wrapper.find('[data-testid="profile-image-component"]').exists()
    ).toBe(true);
  });

  // now toggle the profile  with click event on the element
  describe("check click event with click to toggle profile and signin", () => {
    it("when the user clicks on signin button", async () => {
      const wrapper = shallowMount(MainNav);
      expect(
        wrapper.find('[data-testid="action-button-component"]').exists()
      ).toBe(true);
      const signInButton = wrapper.find(
        '[data-testid="action-button-component"]'
      );
      await signInButton.trigger("click");
      expect(
        wrapper.find('[data-testid="action-button-component"]').exists()
      ).toBe(false);
      expect(
        wrapper.find('[data-testid="profile-image-component"]').exists()
      ).toBe(true);
    });
  });
});
