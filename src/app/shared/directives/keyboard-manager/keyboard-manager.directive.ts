import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

@Directive({ selector: '[appKeyManager]' })
export class KeyboardManagerDirective {
  @ContentChildren(KeyboardManagedItemDirective)
  public items: QueryList<KeyboardManagedItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
      case 'ArrowDown':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowLeft':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
    }
  }

  public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective {
    const items = this.items.toArray();
    const currentSelectedIndex = items.findIndex((item) => item.isFocused());
    let target = items[currentSelectedIndex + direction];

    if (!target) {
      target =
        direction == ArrowDirection.LEFT ? items[items.length - 1] : items[0];
    }

    return target;
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1,
}
