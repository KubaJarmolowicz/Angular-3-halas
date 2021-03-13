import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "noise" })
export class NoisePipe implements PipeTransform {
  transform(value: string): string {
    return value
      .split(" ")
      .map((word, index, arr) =>
        index <= arr.length - 2 ? `${word}${sayBlaRandomly()}` : word
      )
      .join(" ");
  }
}

function sayBlaRandomly() {
  return sayBla(randomIntInclusive(1, 10));
}

function sayBla(num) {
  return " bla ".repeat(num);
}

function randomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomizedInt = Math.floor(Math.random() * (max - min + 1) + min);

  return randomizedInt;
}
