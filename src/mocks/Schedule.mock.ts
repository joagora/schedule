const scheduleMock = {
  schedule: [
    {
      id: "ab669a5b-aa68-4s47-b3f2-a9195d17af72",
      date: 1711929600000,
      visits: [
        {
          id: "c2669a5b-a768-4347-b392-a9195d17af72",
          operatives: [
            {
              first_name: "Arya",
              last_name: "Stark",
            },
            {
              first_name: "Rob",
              last_name: "Stark",
            },
            {
              first_name: "Harry",
              last_name: "Potter",
            },
          ],
          start_time: 1712157600000,
          site: {
            client: "Google",
            address_line_1: "Google lane",
            post_code: "NE1ABC",
            city: "Nottingham",
          },
          task: "LAWN_MOWING",
          estimated_completion_time: 1712164800000,
        },
      ],
    },
    {
      id: "12644a5b-a768-4t47-b392-a9195t17af72",
      date: 1712016000000,
      visits: [],
    },
  ],
};

export default scheduleMock;
