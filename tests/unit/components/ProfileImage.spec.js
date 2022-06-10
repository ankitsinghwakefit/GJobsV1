import { shallowMount } from "@vue/test-utils";
import ProfileImage from "@/components/ProfileImage.vue";

describe("ProfileImage", () => {
  it("should render profile Image", () => {
    const wrapper = shallowMount(ProfileImage, {
      data() {
        return {
          imageLink:
            "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png",
        };
      },
    });
    const profileImage = wrapper.find("img");
    expect(profileImage.exists()).toBe(true);
    expect(profileImage.attributes("src")).toEqual(
      "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png"
    );
  });
});
