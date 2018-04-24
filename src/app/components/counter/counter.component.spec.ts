import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By}  from '@angular/platform-browser'


import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let _counterComponent:CounterComponent;
  let fixture:ComponentFixture<CounterComponent>;
  let debugElement:DebugElement;
  let htmlElement:HTMLElement;

  //create a module by using configureTestingModule module 
   beforeEach(async(()=>{
       TestBed.configureTestingModule({
         declarations:[CounterComponent]
       }).compileComponents();
   }))

    //Initialize all variable with default value  which is going to used in this file
   beforeEach(()=>{
    fixture=TestBed.createComponent(CounterComponent)//testing version of counter component
    fixture.detectChanges()
    _counterComponent=fixture.componentInstance;//instance of counter component
    debugElement=fixture.debugElement.query(By.css('p'));
    htmlElement=debugElement.nativeElement;

   })
   //afterEach section will release all variable
   afterEach(()=>{
     
   })
  //positive test case
   it('should display the current number of the counter',()=>{
     //assert that the test on screen number:1
    expect(htmlElement.textContent).toEqual('Counter Value:1')
   })

    //positive test case
   it('should increment the counter value by one',()=>{
     //get the current value-previous state
     const initialValue=_counterComponent.counter;

      //action
     _counterComponent.increment();
      fixture.detectChanges()//for get the change value
      //get the new state
      const newValue =_counterComponent.counter;

      //assert
      expect(newValue).toBeGreaterThan(initialValue)

   })
   //positive test case
   it('should decrement the counter value by one',()=>{
    //get the current value-previous state
    const initialValue=_counterComponent.counter;

    //act
    _counterComponent.decrement();
     fixture.detectChanges()
     const newValue =_counterComponent.counter;

     //assert

     expect(newValue).toBeLessThan(initialValue)

  })

  it("1 + 1 is 2",()=>{
    expect(1+1).toBe(2)
  })  

});
