﻿import Dep from  './dep.js'

function Observer(value) {
  this.value = value
  this.dep = new Dep()
  // TODO: support Array
  this.walk(value)
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj)
  for (var i = 0, l = keys.length; i < l; i++) {
    this.convert(keys[i], obj[keys[i]])
  }
}


/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val)
}


/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {MikaVue} vm
 */
Observer.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm)
}

export function observe (value, vm) {
  const ob = new Observer(value)
  ob.addVm(vm)
  return ob
}


/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */
export function defineReactive (obj, key, val) {
  var dep = new Dep()

  var property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  var getter = property && property.get
  var setter = property && property.set

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      console.log(`observer.get`)
      var value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      console.log(`observer.set:${newVal}`)
      var value = getter ? getter.call(obj) : val
      if (newVal === value) {
        return
      }
      val = newVal
      dep.notify()
    }
  })
}
