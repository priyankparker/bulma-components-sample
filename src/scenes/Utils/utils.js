import { useState, useCallback } from 'react';

export const isFirst = i => i === 0;
export const isLast = (i, len) => i === len - 1;
export function isNumber(value) {
  return typeof value === 'number';
}

const { readdirSync } = require('fs');
export const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

export function splitArray(array = [], size = 2) {
  if (array.length === 0) return false;

  let arrayOfArrays = [];
  for (let i = 0; i < array.length; i += size) {
    arrayOfArrays.push(array.slice(i, i + size));
  }
  return arrayOfArrays;
}

export function chunk(array = [], chunkSize = 2) {
  if (array.length === 0) return false;

  let arrayOfArrays = [];
  let chunkLength = array.length / chunkSize;
  for (let i = 0; i < array.length; i += chunkLength) {
    arrayOfArrays.push(array.slice(i, i + chunkLength));
  }
  return arrayOfArrays;
}

export function trimAfterHyphen(str) {
  if (typeof str !== 'string') return false;

  return str.split(' ').reduce(
    (acc, val) => {
      if (val === '-') {
        acc.hyphenFound = true;
      }
      return !acc.hyphenFound
        ? {
            ...acc,
            result: acc.result + ' ' + val,
          }
        : { ...acc };
    },
    {
      hyphenFound: false,
      result: '',
    }
  ).result;
}

export const onMobile =
  typeof window !== 'undefined' &&
  typeof window.matchMedia !== 'undefined' &&
  window.matchMedia('(max-width: 768px)').matches === true
    ? true
    : false;

export const isDomElem = id => document.querySelector(id);

export const range = (size, start = 0, arr = Array(size).fill(null)) =>
  arr.map((_, i) => i + start);

export const splitMediaObjects = (
  limits = null,
  mediaObjects = null,
  start = 0,
  end = Array.isArray(limits) ? limits[0] : null
) => {
  if (!Array.isArray(limits) || !Array.isArray(mediaObjects)) {
    return false;
  }

  mediaObjects = getMultiMediaStories(mediaObjects);

  let result = [];
  for (let i = 0; i < limits.length; i++) {
    limits[i] = limits[i] ?? 0 
    end = start + limits[i];
    result = [...result, mediaObjects.slice(start, end)];
    start = end;
  }

  return result;
};

export function getMultiMediaStories(items = [], index = 0) {
  return items.filter(story => story?.multimedia?.[index] ?? false);
}

export const tagItems = items => ({
  primary: items?.[0] ?? null,
  secondary: items?.[1] ?? null,
  tertiary: items?.[2] ?? null,
  quaternary: items?.[3] ?? null,
  quinary: items?.[4] ?? null,
  senary: items?.[5] ?? null,
  septenary: items?.[6] ?? null,
  octonary: items?.[7] ?? null,
  nonary: items?.[8] ?? null,
  denary: items?.[9] ?? null,
  elevenary: items?.[10] ?? null, // 😜
  duodenary: items?.[11] ?? null,
});

export function useClientRect(dependencies = []) {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, [...dependencies]);
  return [rect, ref];
}

export const getParent = (selector = null) =>
  document?.querySelector(selector)?.parentElement ?? null;

export const findParent = (selector = null, parentClassName = 'parent') => {
  console.log(document.querySelector('.tags'));
  // const parent = getParent(selector)
  // const hasParent = parent?.className !== null
  // const parentFound = parent?.className?.includes(parentClassName) === true

  // console.log(
  //     'parent: ', parent,
  //     'hasParent: ', hasParent,
  //     'parentFound: ', parentFound
  // );

  // if(parentFound)
  //     return parent

  // if (!hasParent) {
  //     return null
  // } else {
  //     return findParent(parent?.className.split(' ').join('.'), parentClassName)
  // }
};
export const sum = (arr = []) => arr.reduce((acc, val) => acc +
val , 0)

export const isTruthy = x => x ? true : false

export const stringify = JSON.stringify;