// import { mount } from "@vue/test-utils";
// import Subnav from "@/components/Navigation/Subnav.vue";

// describe("Subnav", () => {
//   it("should render search svg", () => {
//     const wrapper = mount(Subnav);
//     expect(wrapper.findComponent({ name: "search" }).exists()).toBe(true);
//   });

//   it("should render jobs count", () => {
//     const wrapper = mount(Subnav, {
//       global: {
//         mocks: {
//           $route: {
//             name: "JobResults",
//           },
//         },
//       },
//       data() {
//         return {
//           totalJobs: 1280,
//         };
//       },
//     });
//     const jobsCount = wrapper.find('[data-testid="jobs-count"]');
//     expect(jobsCount.exists()).toBe(true);
//     expect(jobsCount.text()).toEqual("1280");
//   });

//   it("should render jobs matched statement", () => {
//     const wrapper = mount(Subnav);
//     const jobStatements = wrapper.find(
//       '[data-testid="jobs-matched-statement"]'
//     );
//     expect(jobStatements.exists()).toBe(true);
//     expect(jobStatements.text()).toEqual("1280 jobs matched");
//   });

//   describe("when user is not on job search page", () => {
//     it("should not render svg and jobs statement", () => {
//       const wrapper = mount(Subnav, {
//         // we can stub components that we dont want to render / want to skip them
//         // global: {
//         //   stubs: {
//         //     FontAwesome: true,
//         //     AnotherComponent: false,
//         //   }
//         // },
//         global: {
//           mocks: {
//             $route: {
//               name: "Home",
//             },
//           },
//         },
//         data() {
//           return {
//             totalJobs: 1280,
//           };
//         },
//       });
//       const jobsCount = wrapper.find('[data-testid="jobs-count"]');
//       expect(jobsCount.exists()).toBe(false);
//       const jobStatements = wrapper.find(
//         '[data-testid="jobs-matched-statement"]'
//       );
//       expect(jobStatements.exists()).toBe(false);
//     });
//   });
// });
