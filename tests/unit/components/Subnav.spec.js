import { shallowMount } from "@vue/test-utils";
import Subnav from "@/components/Subnav.vue";

describe("Subnav", () => {
  it("should render search svg", () => {
    const wrapper = shallowMount(Subnav);
    expect(wrapper.find("svg").exists()).toBe(true);
  });

  it("should render jobs count", () => {
    const wrapper = shallowMount(Subnav, {
      data() {
        return {
          totalJobs: 1280,
        };
      },
    });
    const jobsCount = wrapper.find('[data-testid="jobs-count"]');
    expect(jobsCount.exists()).toBe(true);
    expect(jobsCount.text()).toEqual("1280");
  });

  it("should render jobs matched statement", () => {
    const wrapper = shallowMount(Subnav);
    const jobStatements = wrapper.find(
      '[data-testid="jobs-matched-statement"]'
    );
    expect(jobStatements.exists()).toBe(true);
    expect(jobStatements.text()).toEqual("1280 jobs matched");
  });

  describe("when user is not on job search page", () => {
    it("should not render svg and jobs statement", () => {
      const wrapper = shallowMount(Subnav, {
        // we can stub components that we dont want to render / want to skip them
        // global: {
        //   stubs: {
        //     FontAwesome: true,
        //     AnotherComponent: false,
        //   }
        // },
        data() {
          return {
            totalJobs: 1280,
            onJobsSearchPage: false,
          };
        },
      });
      const jobsCount = wrapper.find('[data-testid="jobs-count"]');
      expect(jobsCount.exists()).toBe(false);
      const jobStatements = wrapper.find(
        '[data-testid="jobs-matched-statement"]'
      );
      expect(jobStatements.exists()).toBe(false);
    });
  });
});
