import { shallowMount, flushPromises } from "@vue/test-utils";
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
        mocks: {
          $route,
        },
      },
    });
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
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
