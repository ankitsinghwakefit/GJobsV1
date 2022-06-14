import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  it("should render job title", () => {
    const job = {
      id: 1,
      title: "Angular Developer",
      organization: "Vue and Me",
      degree: "Master's",
      jobType: "Intern",
      locations: ["Lisbon"],
      minimumQualifications: [
        "Mesh granular deliverables, engineer enterprise convergence, and synergize B2C initiatives",
        "Morph bricks-and-clicks relationships, whiteboard one-to-one experiences, and innovate distributed schemas",
        "Drive intuitive deliverables, exploit vertical users, and optimize interactive e-commerce",
        "Embrace sticky infrastructures, incubate B2C portals, and drive killer applications",
      ],
    };
    const wrapper = shallowMount(JobListing, {
      props: { job },
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
    const title = wrapper.find('[data-testId="job-title"]');
    expect(title.exists()).toBe(true);
    expect(title.text()).toEqual("Angular Developer");

    const routerLink = wrapper.findComponent(RouterLinkStub);
    const toProps = routerLink.props("to");
    expect(toProps).toEqual("/jobs/results/1");
  });
});
