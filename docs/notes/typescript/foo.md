---
title: foo
author: 你的名字
createTime: 2024/07/02 17:34:49
permalink: /typescript/g9hnvrlb/
---

::: tabs#sort

@tab 冒泡排序

```ts
// 冒泡排序函数
function bubbleSort<T>(array: T[]): T[] {
  const arr = [...array]; // 创建数组的副本以避免修改原始数组
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // 标记当前遍历是否有元素交换
    let swapped = false;

    // 内层循环比较相邻元素
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交换元素
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // 如果没有交换，说明数组已经排序好
    if (!swapped) {
      break;
    }
  }

  return arr;
}

// 测试冒泡排序函数
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log('未排序数组:', unsortedArray);

const sortedArray = bubbleSort(unsortedArray);
console.log('已排序数组:', sortedArray);
```

@tab 插入排序

```ts
/**
 * 插入排序函数
 *
 * @param array 待排序数组
 * @returns 排序后的数组
 */
function insertionSort<T>(array: T[]): T[] {
  const arr = [...array]; // 创建数组的副本以避免修改原始数组

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // 从已排序部分倒序扫描，寻找合适位置插入当前元素
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

// 测试插入排序函数
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log('未排序数组:', unsortedArray);

const sortedArray = insertionSort(unsortedArray);
console.log('已排序数组:', sortedArray);
```

:::

