# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.8.0] - 2018-6-12
### Added
- Create wrappers for Styleguide components and replace some of RJSF's default widgets with them;
- Create custom `ErrorListTemplate`.

### Changed
- Restructure label logic;
- Move `ComponentEditor`'s top bar and buttons out of form;
- Make `ComponentEditor`'s close icon a button;
- Refactor `BaseInput`;
- Move error messages and handling to widgets.

### Fixed
- Fix `ComponentEditor`'s internal z-index;
- Fix `FieldTemplate`'s description logic;
- Fix `BaseInput`'s `onChange` edge case bug.

## [1.7.1] - 2018-6-11
### Fixed
- Fix bug of z-index in the EditableExtensionPoint when the treePath has many resources.

## [1.7.0] - 2018-6-6
### Added
- Dynamic parameter in the translated string via object values.

### Changed
- Translate `ui:placeholder`, `ui:help`, `ui:description`, and `ui:title` inside the `widget` property of the schema
- Translate `title`, `description` and `enumNames` properties in component schema.

## [1.6.0] - 2018-05-24
### Added
- Support for deep schema objects

### Changed
- Hide the input label when it's a checkbox.

## [1.5.1] - 2018-05-03
### Fixed
- Avoid setting everything as undefined
- Fix implementation of singleton `ComponentEditor` instance that affected the test environment

## [1.5.0] - 2018-05-03
- Added to the `ComponentEditor` support for `UiSchema` to be defined with the `Component Schema`

## [1.4.0] - 2018-04-24
### Added
- Added to the `ComponentEditor` support for dynamic component schemas.

### Fixed
- Fixed the `ComponentEditor` to save extension
