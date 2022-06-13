import { shallowMount } from "@vue/test-utils";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

describe("JobSearchForm", () => {
  let wrapper;
  const push = jest.fn();
  const $router = {
    push,
  };
  beforeEach(() => {
    wrapper = shallowMount(JobSearchForm, {
      global: {
        mocks: {
          $router,
        },
        stubs: {
          lable: true,
        },
      },
      data() {
        return {
          role: "role",
          location: "location",
        };
      },
    });
  });
  it("should render input component for role", () => {
    const role = wrapper.find('[data-testid="role-input"]');
    expect(role.exists()).toBe(true);
  });

  it("should render input component for location", () => {
    const location = wrapper.find('[data-testid="location-input"]');
    expect(location.exists()).toBe(true);
  });

  it("should render action button to submit", async () => {
    const actionButton = wrapper.find('[data-testid="submit-form-button"]');
    expect(actionButton.exists()).toBe(true);

    await actionButton.trigger("click");
    expect(push).toHaveBeenCalled();
    expect(push).toHaveBeenCalledWith({
      name: "JobResults",
      query: {
        role: "role",
        location: "location",
      },
    });
  });
});
