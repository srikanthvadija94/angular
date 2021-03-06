/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {core as compilerCore} from '@angular/compiler';
import * as core from '@angular/core';

{
  describe('compiler core', () => {
    it('Attribute should be equal', () => {
      typeExtends<compilerCore.Attribute, core.Attribute>();
      typeExtends<core.Attribute, compilerCore.Attribute>();
      compareRuntimeShape(new core.Attribute('someName'), compilerCore.createAttribute('someName'));
    });

    it('Inject should be equal', () => {
      typeExtends<compilerCore.Inject, core.Inject>();
      typeExtends<core.Inject, compilerCore.Inject>();
      compareRuntimeShape(new core.Inject('someName'), compilerCore.createInject('someName'));
    });

    it('Query should be equal', () => {
      typeExtends<compilerCore.Query, core.Query>();
      typeExtends<core.Query, compilerCore.Query>();
      compareRuntimeShape(
          new core.ContentChild('someSelector'), compilerCore.createContentChild('someSelector'));
      compareRuntimeShape(
          new core.ContentChild('someSelector', {read: 'someRead'}),
          compilerCore.createContentChild('someSelector', {read: 'someRead'}));
      compareRuntimeShape(
          new core.ContentChildren('someSelector'),
          compilerCore.createContentChildren('someSelector'));
      compareRuntimeShape(
          new core.ContentChildren('someSelector', {read: 'someRead', descendants: false}),
          compilerCore.createContentChildren(
              'someSelector', {read: 'someRead', descendants: false}));
      compareRuntimeShape(
          new core.ViewChild('someSelector'), compilerCore.createViewChild('someSelector'));
      compareRuntimeShape(
          new core.ViewChild('someSelector', {read: 'someRead'}),
          compilerCore.createViewChild('someSelector', {read: 'someRead'}));
      compareRuntimeShape(
          new core.ViewChildren('someSelector'), compilerCore.createViewChildren('someSelector'));
      compareRuntimeShape(
          new core.ViewChildren('someSelector', {read: 'someRead'}),
          compilerCore.createViewChildren('someSelector', {read: 'someRead'}));
    });

    it('Directive should be equal', () => {
      typeExtends<compilerCore.Directive, core.Directive>();
      typeExtends<core.Directive, compilerCore.Directive>();
      compareRuntimeShape(new core.Directive({}), compilerCore.createDirective({}));
    });

    it('Component should be equal', () => {
      typeExtends<compilerCore.Component, core.Component>();
      typeExtends<core.Component, compilerCore.Component>();
      compareRuntimeShape(new core.Component({}), compilerCore.createComponent({}));
    });

    it('Pipe should be equal', () => {
      typeExtends<compilerCore.Pipe, core.Pipe>();
      typeExtends<core.Pipe, compilerCore.Pipe>();
      compareRuntimeShape(
          new core.Pipe({name: 'someName'}), compilerCore.createPipe({name: 'someName'}));
    });

    it('NgModule should be equal', () => {
      typeExtends<compilerCore.NgModule, core.NgModule>();
      typeExtends<core.NgModule, compilerCore.NgModule>();
      compareRuntimeShape(new core.NgModule({}), compilerCore.createNgModule({}));
    });

    it('marker metadata should be equal', () => {
      compareRuntimeShape(new core.Injectable(), compilerCore.createInjectable());
      compareRuntimeShape(new core.Optional(), compilerCore.createOptional());
      compareRuntimeShape(new core.Self(), compilerCore.createSelf());
      compareRuntimeShape(new core.SkipSelf(), compilerCore.createSkipSelf());
      compareRuntimeShape(new core.Host(), compilerCore.createHost());
    });

    it('InjectionToken should be equal', () => {
      compareRuntimeShape(
          new core.InjectionToken('someName'), compilerCore.createInjectionToken('someName'));
    });

    it('non const enums should be equal', () => {
      typeExtends<compilerCore.ViewEncapsulation, core.ViewEncapsulation>();
      typeExtends<core.ViewEncapsulation, compilerCore.ViewEncapsulation>();

      typeExtends<compilerCore.ChangeDetectionStrategy, core.ChangeDetectionStrategy>();
      typeExtends<core.ChangeDetectionStrategy, compilerCore.ChangeDetectionStrategy>();

      typeExtends<compilerCore.SecurityContext, core.SecurityContext>();
      typeExtends<core.SecurityContext, compilerCore.SecurityContext>();

      typeExtends<compilerCore.MissingTranslationStrategy, core.MissingTranslationStrategy>();
      typeExtends<core.MissingTranslationStrategy, compilerCore.MissingTranslationStrategy>();
    });

    it('const enums should be equal', () => {
      expect(compilerCore.NodeFlags.None).toBe(core.??NodeFlags.None);
      expect(compilerCore.NodeFlags.TypeElement).toBe(core.??NodeFlags.TypeElement);
      expect(compilerCore.NodeFlags.TypeText).toBe(core.??NodeFlags.TypeText);
      expect(compilerCore.NodeFlags.ProjectedTemplate).toBe(core.??NodeFlags.ProjectedTemplate);
      expect(compilerCore.NodeFlags.CatRenderNode).toBe(core.??NodeFlags.CatRenderNode);
      expect(compilerCore.NodeFlags.TypeNgContent).toBe(core.??NodeFlags.TypeNgContent);
      expect(compilerCore.NodeFlags.TypePipe).toBe(core.??NodeFlags.TypePipe);
      expect(compilerCore.NodeFlags.TypePureArray).toBe(core.??NodeFlags.TypePureArray);
      expect(compilerCore.NodeFlags.TypePureObject).toBe(core.??NodeFlags.TypePureObject);
      expect(compilerCore.NodeFlags.TypePurePipe).toBe(core.??NodeFlags.TypePurePipe);
      expect(compilerCore.NodeFlags.CatPureExpression).toBe(core.??NodeFlags.CatPureExpression);
      expect(compilerCore.NodeFlags.TypeValueProvider).toBe(core.??NodeFlags.TypeValueProvider);
      expect(compilerCore.NodeFlags.TypeClassProvider).toBe(core.??NodeFlags.TypeClassProvider);
      expect(compilerCore.NodeFlags.TypeFactoryProvider).toBe(core.??NodeFlags.TypeFactoryProvider);
      expect(compilerCore.NodeFlags.TypeUseExistingProvider)
          .toBe(core.??NodeFlags.TypeUseExistingProvider);
      expect(compilerCore.NodeFlags.LazyProvider).toBe(core.??NodeFlags.LazyProvider);
      expect(compilerCore.NodeFlags.PrivateProvider).toBe(core.??NodeFlags.PrivateProvider);
      expect(compilerCore.NodeFlags.TypeDirective).toBe(core.??NodeFlags.TypeDirective);
      expect(compilerCore.NodeFlags.Component).toBe(core.??NodeFlags.Component);
      expect(compilerCore.NodeFlags.CatProviderNoDirective)
          .toBe(core.??NodeFlags.CatProviderNoDirective);
      expect(compilerCore.NodeFlags.CatProvider).toBe(core.??NodeFlags.CatProvider);
      expect(compilerCore.NodeFlags.OnInit).toBe(core.??NodeFlags.OnInit);
      expect(compilerCore.NodeFlags.OnDestroy).toBe(core.??NodeFlags.OnDestroy);
      expect(compilerCore.NodeFlags.DoCheck).toBe(core.??NodeFlags.DoCheck);
      expect(compilerCore.NodeFlags.OnChanges).toBe(core.??NodeFlags.OnChanges);
      expect(compilerCore.NodeFlags.AfterContentInit).toBe(core.??NodeFlags.AfterContentInit);
      expect(compilerCore.NodeFlags.AfterContentChecked).toBe(core.??NodeFlags.AfterContentChecked);
      expect(compilerCore.NodeFlags.AfterViewInit).toBe(core.??NodeFlags.AfterViewInit);
      expect(compilerCore.NodeFlags.AfterViewChecked).toBe(core.??NodeFlags.AfterViewChecked);
      expect(compilerCore.NodeFlags.EmbeddedViews).toBe(core.??NodeFlags.EmbeddedViews);
      expect(compilerCore.NodeFlags.ComponentView).toBe(core.??NodeFlags.ComponentView);
      expect(compilerCore.NodeFlags.TypeContentQuery).toBe(core.??NodeFlags.TypeContentQuery);
      expect(compilerCore.NodeFlags.TypeViewQuery).toBe(core.??NodeFlags.TypeViewQuery);
      expect(compilerCore.NodeFlags.StaticQuery).toBe(core.??NodeFlags.StaticQuery);
      expect(compilerCore.NodeFlags.DynamicQuery).toBe(core.??NodeFlags.DynamicQuery);
      expect(compilerCore.NodeFlags.CatQuery).toBe(core.??NodeFlags.CatQuery);
      expect(compilerCore.NodeFlags.Types).toBe(core.??NodeFlags.Types);

      expect(compilerCore.DepFlags.None).toBe(core.??DepFlags.None);
      expect(compilerCore.DepFlags.SkipSelf).toBe(core.??DepFlags.SkipSelf);
      expect(compilerCore.DepFlags.Optional).toBe(core.??DepFlags.Optional);
      expect(compilerCore.DepFlags.Value).toBe(core.??DepFlags.Value);

      expect(compilerCore.InjectFlags.Default).toBe(core.InjectFlags.Default);
      expect(compilerCore.InjectFlags.SkipSelf).toBe(core.InjectFlags.SkipSelf);
      expect(compilerCore.InjectFlags.Self).toBe(core.InjectFlags.Self);

      expect(compilerCore.ArgumentType.Inline).toBe(core.??ArgumentType.Inline);
      expect(compilerCore.ArgumentType.Dynamic).toBe(core.??ArgumentType.Dynamic);

      expect(compilerCore.BindingFlags.TypeElementAttribute)
          .toBe(core.??BindingFlags.TypeElementAttribute);
      expect(compilerCore.BindingFlags.TypeElementClass).toBe(core.??BindingFlags.TypeElementClass);
      expect(compilerCore.BindingFlags.TypeElementStyle).toBe(core.??BindingFlags.TypeElementStyle);
      expect(compilerCore.BindingFlags.TypeProperty).toBe(core.??BindingFlags.TypeProperty);
      expect(compilerCore.BindingFlags.SyntheticProperty)
          .toBe(core.??BindingFlags.SyntheticProperty);
      expect(compilerCore.BindingFlags.SyntheticHostProperty)
          .toBe(core.??BindingFlags.SyntheticHostProperty);
      expect(compilerCore.BindingFlags.CatSyntheticProperty)
          .toBe(core.??BindingFlags.CatSyntheticProperty);
      expect(compilerCore.BindingFlags.Types).toBe(core.??BindingFlags.Types);

      expect(compilerCore.QueryBindingType.First).toBe(core.??QueryBindingType.First);
      expect(compilerCore.QueryBindingType.All).toBe(core.??QueryBindingType.All);

      expect(compilerCore.QueryValueType.ElementRef).toBe(core.??QueryValueType.ElementRef);
      expect(compilerCore.QueryValueType.RenderElement).toBe(core.??QueryValueType.RenderElement);
      expect(compilerCore.QueryValueType.TemplateRef).toBe(core.??QueryValueType.TemplateRef);
      expect(compilerCore.QueryValueType.ViewContainerRef)
          .toBe(core.??QueryValueType.ViewContainerRef);
      expect(compilerCore.QueryValueType.Provider).toBe(core.??QueryValueType.Provider);

      expect(compilerCore.ViewFlags.None).toBe(core.??ViewFlags.None);
      expect(compilerCore.ViewFlags.OnPush).toBe(core.??ViewFlags.OnPush);
    });
  });
}

function compareRuntimeShape(a: any, b: any) {
  const keys = metadataKeys(a);
  expect(keys).toEqual(metadataKeys(b));
  keys.forEach(key => { expect(a[key]).toBe(b[key]); });
  // Need to check 'ngMetadataName' separately, as this is
  // on the prototype in @angular/core, but a regular property in @angular/compiler.
  expect(a.ngMetadataName).toBe(b.ngMetadataName);
}

function metadataKeys(a: any): string[] {
  return Object.keys(a).filter(prop => prop !== 'ngMetadataName' && !prop.startsWith('_')).sort();
}

function typeExtends<T1 extends T2, T2>() {}
