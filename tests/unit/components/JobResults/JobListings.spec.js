import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";
import JobListings from "@/components/JobResults/JobListings.vue";
import axios from "axios";

// jest can mock any 3rd party libraries using this method
// read here https://test-utils.vuejs.org/guide/advanced/async-suspense.html#a-simple-example-updating-with-trigger
jest.mock("axios");

describe("JobResults", () => {
  it("should call api in mounted", () => {
    const $route = {
      query: {
        page: 1,
      },
    };
    shallowMount(JobListings, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
        mocks: {
          $route,
        },
      },
    });
    // process env variables are used in test mode
    expect(axios.get).toHaveBeenCalledWith("http://localhost:8000/test//jobs");
  });

  it("should render jobListing component equal times to 10 per page", async () => {
    // aused to mock resolved value
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const $route = {
      query: {
        page: 1,
      },
    };
    const wrapper = shallowMount(JobListings, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
        mocks: {
          $route,
        },
      },
    });
    await flushPromises();
    const jobListing = wrapper.findAll('[data-testid="job-listing-component"]');
    // both tests are equivalent  //
    expect(jobListing).toHaveLength(10);
    expect(jobListing.length).toEqual(10);
  });
});

describe("should render correct page number", () => {
  it("should render correct page number", () => {
    const $route = {
      query: {
        page: "3",
      },
    };
    const wrapper = shallowMount(JobListings, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
        mocks: {
          $route,
        },
      },
    });
    const currentPage = wrapper.find('[data-testid="current-page-number"]');
    expect(currentPage.exists()).toBe(true);
    expect(currentPage.text()).toEqual("Page 3");
  });

  it("should render previous page and next page correctly", () => {
    const $route = {
      query: {
        // page is empty
        // page: "3",
      },
    };
    const wrapper = shallowMount(JobListings, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
        mocks: {
          $route,
        },
      },
    });
    const currentPage = wrapper.find('[data-testid="current-page-number"]');
    expect(currentPage.exists()).toBe(true);
    expect(currentPage.text()).toEqual("Page 1");
    const previousPage = wrapper.find('[data-testid="previous-page-link"]');
    expect(previousPage.exists()).toBe(false);
    // expect(wrapper.find('[data-testid="next-page-link"]').exists()).toBe(true);
  });
});
