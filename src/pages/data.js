export const categoryData = [
  {
    label: "检查类别",
    data: [
      {
        id: "1",
        name: "台州检查",
        next: [
          {
            id: "1-1",
            name: "其他",
            next: [
              {
                id: "1-1-1",
                name: "CT检查-增强费（台州检查勿动）",
              },
              {
                id: "1-1-2",
                name: "CT检查-服务组合（台州检查勿动）",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        name: "心电图",
        next: [
          {
            id: "2-1",
            name: "其他",
            next: [
              {
                id: "2-1-1",
                name: "检查-心电",
              },
            ],
          },
          {
            id: "2-2",
            name: "急诊心电图",
            next: [
              {
                id: "2-2-1",
                name: "急诊心电图1",
              },
            ],
            children: [
              {
                id: "2-2-1",
                name: "心电图2",
                next: [
                  {
                    id: "2-2-1-1",
                    name: "急诊心电图2",
                  },
                ],
                children: [
                  {
                    id: "2-2-1-1",
                    name: "心电图3",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "检查部位类型",
    showChildren: true,
    data: [],
  },
  {
    label: "检查项目",
    data: [],
  },
];
