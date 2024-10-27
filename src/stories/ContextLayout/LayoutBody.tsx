import React from 'react'
import i18next from 'i18next'
import { useLang } from '../../homeworks/LangSwitcher/LangContext'

const LayoutBody = () => {
    const {lang} = useLang()
  return (
    <div>
    <p>{i18next.t("aboutMyselfP1", {lng: lang})}</p>
    <p>{i18next.t("aboutMyselfP2", {lng: lang})}</p>
    <p>{i18next.t("aboutMyselfP3", {lng: lang})}</p>
    <p>{i18next.t("aboutMyselfP4", {lng: lang})}</p>
    <p>{i18next.t("aboutMyselfP5", {lng: lang})}</p>
    <p>{i18next.t("aboutMyselfP6", {lng: lang})}</p>
</div>
  )
}

export default LayoutBody