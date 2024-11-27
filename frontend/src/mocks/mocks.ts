export const routeDataMock = {
  origin: {
    latitude: -15.744181,
    longitude: -48.2794687,
  },
  destination: {
    latitude: -15.559917200000001,
    longitude: -49.9428261,
  },
  distance: 269090,
  duration: "13060s",
  options: [
    {
      id: 1,
      name: "Homer Simpson",
      description:
        "Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).",
      vehicle: "Plymouth Valiant 1973 rosa e enferrujado",
      review: {
        rating: 2,
        comment:
          "Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.",
      },
      value: 672.72,
    },
    {
      id: 2,
      name: "Dominic Toretto",
      description:
        "Ei, aqui é o Dom. Pode entrar, voute levar com segurança e rapidez ao seudestino. Só não mexa no rádio, a playlist é sagrada.",
      vehicle: "Dodge Charger R/T 1970 modificado",
      review: {
        rating: 4,
        comment:
          "Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!",
      },
      value: 1345.45,
    },
    {
      id: 3,
      name: "James Bond",
      description:
        "Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.",
      vehicle: "Aston Martin DB5 clássico",
      review: {
        rating: 5,
        comment:
          "Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto",
      },
      value: 2690.9,
    },
  ],
  routeResponse: {
    polyline: {
      encodedPolyline:
        "b`b_BtqteHFIoAkAkKuLmD_E]_@y@cAgAgA_CkCuCwCJQ?OMKG?Oa@@g@nFcFtCsChByApDiCFi@GUSIMAUDm@n@uBrC_JzIsEhE}EfFeBxBeAlBm@zAc@zAo@xC]`DKnB@|BNfE\\`Ev@`HRdCJpBdDn\\FbF\\|DL~@z@fEPxApCxXlA~L|@~NbCdWrD`_@d@dEXzAbBjHp@`Cb@lAr@xAfA`B`EvEpk@nn@bAjApCbE|B~BrBdBf@h@z@x@zA`BlAzAbBlCh@lAbAvCtArE\\~BThCBvACvCUpE_BdXk@pI@\\wAvUIt@m@hD{@tCs@fBc@`A_A|A_ArAcBlBqc@t`@aBxAeAnAkAdBq@nAcAhC]rAc@`CWfC}Bd`@IhBc@fSc@`RIdBiBfSO~BO`E_@nQOvCMvAQnAs@|D_AlDmLz[{AhEw@~Bo@nCm@rEU|Bc@`Hs@zNg@dJo@lKw@`NWrDSvCYfEKhE@dCJ~AR~@rA~DNf@r@vAr@nAfArAbB|ArBvA~@f@lBr@lA^|Dh@fObCbMpBlMvBxAVl@FpCd@`AThBn@lAh@|@d@zB`Bn@j@|@dAv@lAh@~@~@tB|@tCZjBJr@PxB@zAG`DUnFc@hLo@~MBhCLtBJbA~CtQpB|JjEbSp@pB`AnBhAbB\\b@t@x@nNdLjA|@~BnBbChB|ClCrB~BjAfBj@hAz@xB^lAb@`BtFtQxAjF`I|Wt@~B~DzNfBxFhFnQfBbGtEpOjDpLfAzDr@lBhAzB~@zA~ArBfBfBnB~AfBdAnEdCjE`CdE~BtMhHbAl@jCpBpAjApBtB~ApBr@fAhB~Cn@dBn@jBn@rCZhDDpA?vCGzAShCM|@]~AWfAgFtNcCdHwF`PeApCqKzZcH|RmC~H}CtIcLh\\k@lBc@fBa@lC[rDE`CH~CRdCZrCjCjSXdBrDdXtD~XrAtKtBlNJnBFrCDh@lBzKx@`GVbDFhBBdACz@En@eApEa@rBcA~Bs@rAk@x@qAxA}GfHaDtC_@b@gBhCq@x@CFgJtJq@t@cAvAgAvBc@bAg@|Ae@~BQzAMpBAbDBtARnBXfBPr@nFdQbA~Cr@vCXdBLtBDlCMnCWxBY`B[hAw@~BeHfRs@nBg@jAm@jAkBpCgYj^{GjIkA`BoF|GeAxAsAbC_AzB}Or`@aAnBkAhBm@t@y@v@yBlBcIzHs@`A}@vAuApCy@`Cg@~BgJph@c@hCOl@y@rE{@tCcAjCwBjFkBhFg@hBY~AOtAKzAArAFfCJvANhA`@pBhCnKPp@Z|BP`DZfa@\\|p@JdOBlGLpQJzR`@ns@@vISlGw@`NoB`_@}FphAoAdWGxBBxEL|B`@jEh@zCf@xBZdAbAvCjSfh@x@lBfV`n@dClGtKpXjC`H|ArD|HfSf@rA^rA|AjI~CjQzB|L|Ilg@fDvQfAdGdA|FT~BHhB?dBGdCSbBo@vDaDrKaCtIgAlDoB~EeUzg@sTbg@yC|GcJ~RqB|Ei@fBY`BU`CCdDZpPEj@MRQJ[Dm@My@u@Y?OJEP@JjA~@dD|CdBpAhBpAdBv@rRnObAt@vDbCtC`BvDjBxAn@~NfH~BdAhFzBxDfBrHdDjCtA~KfFvL~FnCzAtGxCdClAhAf@`FlBvLnFtG|CbBv@nA`AvA~@~CxA|G~C|B`A`ClAtD`BnAn@rHhD|@`@`EjAvRfJTDzXrM|XnMlQjIbBn@~C~@rCd@pE`@dBBpCGlDY~Bc@|DeA|k@kPhCm@t@O|BWnBMpR@fA?fE`@bE~@~KnEdBf@l@JfABhBCpBM~BWr@QzAi@\\Q`@Yt@u@zAkBrc@gm@r@q@dAq@|Am@z@U|AOzB?zFHjAE`Gs@tBa@`A[p@e@|@}@^i@Xo@To@xAqHRs@x@iB`@q@h@s@fAcAj@_@~Aw@`A[dB]rAM|AAjAHrBZl@PxLjE|BbAbAj@fAr@jH|F~WnS`EfDxBjAvAh@zCz@bIfB|Ad@~Ap@|A~@`At@zAvA`@b@v@hAt@tAv@pBp@bCxAdLr@pCpAbDd@dA|HzNf@p@jA~@r@b@dBj@v@JfBH~@DvBAn@DnAXZLz@h@jAnAlFxHjCtD`EbGd^bh@z@r@v@`@`AXnAPxGLhFDjA?lCMdBWnL}BdCYbBGlB@lAFjCZzNdC`B\\bAVlBx@zDdCzCtBpN`Jz@b@dAXz@JxDLvBRfAP~\\`ItA^`Cx@dAf@v@f@lGlEzAvATRlAdBt@rAp@|AhAnDh@dBZr@f@t@d@`@p@^vBz@pBl@tA^|@^p@f@t@bAVx@J`A?p@K`Ai@zAmAnCc@fBKfA@lAb@rJzApXPbBH\\Rj@b@x@p@x@|@t@fAd@dAVfALfADtN^hCDfFTvTl@nATF?THfAv@zIfYj@fC\\hCH`BAdCOjDaBlS_@pFsCl^qErl@OhAi@`CW~@a@fAs@xAs@fAc@j@gBhBaAv@y@j@cB|@ml@tYsPdI{DpBsk@fYub@zSsBhAQJsApAo@x@wAfCgIhQiBbEyWtw@gFhPqFfReWr~@u@nCo@tBoAjCy@pAiBvBeDnCaMfJmElDsArBe@tAi@~BcAdFK`B?xBNbJAzC]xCiAzFYbBi@bCe@tDOnAi@rCcAfEkAjDsBnJeAlFu@hCmAjGsArG_@|BMrAIrCOzDQxDYnCe@dCa@rAgChHg@fAm@~@gAdAkIdGcAfAo@bAwBvDeAzBOd@Id@Gl@?b@DrAZbE~@dLRhCF~AErBk@|GGpB_AxDoF|MwApCsAhByJzLUXw@nA{@nBM\\cAvE}@jEQbAmAnFOlA@l@LjA?x@Gj@W|@_KtWcAdCiA~C_AzBiHvRmAtDSbAYbCItACrBFbCHt@PjAIl@Sf@SLIVB\\PRXFXCNODMnGSdHWlDK|Nm@lC?bBJdBRlATvA`@xAh@rBdAt@f@fAz@bA`A`AnAn@dAnCjFhGjMfC~E`BfDxFdLtN|YbHnNpI~P`CfF|K`UvApCvFnLhAtC\\tALr@VtBrAdNxAhNj@dFV~Cr@pGvAbNf@rE|BxT`@pDPfAn@hCr@lB`@~@l@jAxAzBdMpQdCnDrO`U~NbT\\d@z@rAt\\jf@rFdI`AnAvGzJhLjPnFbIzl@r{@|NbTvVn^rBpCbCvB|@n@jAr@pBz@z@V|Cj@vCT`Lt@vv@`FnBN|BJlIh@zEX`PdAbIj@rKr@bJj@`F^~Ed@xMjBxDh@`Ef@dC`@rG~@`BTpBZ~RrCfJtBre@vK`RbE`W|FxCf@lCR`DEfBMnDe@vFy@bDe@lIiAhUaDtBQ|d@cBrBSlASbBa@jBs@bB}@lAy@vU{PlBgB`AoApIyMjDuFbAqAdA{@fAk@lAa@dBQdA?z@FrB\\jIlBxElA~Bf@ng@vLd]`IfGpAdAHjB?~h@qAbC?bAFbCVfE`A`h@|L`AXnAf@d@Z|@|@p@dAfAxBvB`Ej@pAXnAC`@WdAiDbCg`Abo@cBrAqBfBuBxBsAbBkBzCe@x@cA|ByU~k@kCpG_DbIyBvDcDjFgJ~OsSx]cEtHeDvFy@|AWXyDtG{AlCmF|IsTt_@o@fAaDfGyIpQcIxPcS~a@kI`QeCdFuIjNkc@vq@oA`By@`AgBbBma@b_@mPfOmDbDeEzD}p@xm@g\\hZyAvA{ZpXsL|Kk]f[{N~JcQrKoHdF}GfE}DpCwH|EcBrAqVvU}KtKcI~H{FxFcMnLyB|BeT|SeAhAcAnAcA~AyGlLqBzCsCvCcR`Oqj@`c@wyAbjAwUtQqDtCiBlA_B~@uT|J{DnBsAx@}AbAq@`@sBxAeC|Aw@h@}A~@sJnGmG~DqlAhw@{GnEwK`HgdBrhAuHnE{IvDi`@zOaA`@iBn@{H|CgIjDkBp@oAh@cBn@gMhFoCdAqExBeCxAgD~B}DfCgAv@qInFmNbJqGfE{BnAe@P{FrC{BdA{CnBeCxB}ClCcAbA_C~AqaAbo@{BrA}AhAy@f@m@b@{Ax@aAr@uMxI{MtI{FzDoJdGaAj@qAj@gC|@{Bf@eBXcZbEkd@hG_WjDyDd@eV`DaEf@_IhAqB^mCr@yGzBq@\\qKfDyGtByDpAePfFcNlEsT~GwJ`DU@yGfBqKhD_Cz@oBx@EFiM`EkH|BwEzAcdAb\\wX|IO@uEfAuE~AkCfAGFsK~CoAd@mb@dNiK|CqCb@sz@dJet@vHqAPyCl@uBt@_]pOsAh@yGtC{DpAmI~BeiAt[wAd@yAp@qBbAqC~Acu@fd@gCxA}WbPkUlNeJvFqAdA{A`B{AxByNrR}@fAsArAeCpB{AfAkJrFqGrDm]nSyDtByLlHsJvFyIlFiJrFoAp@eMvHiDjCqCvCuk@np@eIdJ{LrNqCbDwFnGeaAlhAaA`AsBdB}A`AgB~@iBt@mCv@{Cn@wW`DwJfAaC\\}Bb@gCn@qRpGsLzDe`@nMgB`@wB`@yM~AyB`@gBj@kAd@sAp@u@f@_BpA_GdGqFdGuGvGy@v@kBlA_Aj@iAh@_Bj@uFx@aCVo[tBo\\`CqBTiB\\cDz@}Bx@gBx@wCjBqBzAcEhDo^rYyAlAmCpBoAv@mC|Acs@xb@}DfCiI~EoAz@eAz@q@n@{AhBw@dA}A|BmBfDw_@bo@eX~c@q@rAiAvCgU~p@k@rAk@lAeAhBmBpCaDbDyAdA_DtBsj@j[qQdKoDnCcFbEkBtAsBrAmLfHqZ`RiIbFmP|JgCjBaBxAkTpU}@~@cCpBaAt@_CnAeAh@{Bv@}@Zia@nKeJhCwn@vPwCt@WCuA?e@J[LCV@TJVRNTBlAZj@^xH|FbGhEtR`OlKxH~BlBdAdAlBzBvAhCr@fBnH|RdMx[bCjGz@lDTnARzBPrHHzS@j]FjBLbBPrAR`At@tCj@~AHRfBhDtEjIbSt_@fDnGdDbGfBvD`AnCv@~CjKjf@tGrZjAxFvFjW|Oxt@d@~CT|CDnEQjDWxCcC~Sg@xESxDEvBFnDNpBJx@RrAdAtEvEtP\\xAvVv}@f@vCP|BBv@@zAYlESvAu@pDyTldAyCnM{B|Jc@jCSnBGdAEdCMhl@EzS?dIDvLCtQJ~CN`B\\~Bx@dER`BV`EBf@EdCmBrb@k@pMG~DBfEJ`C`@zEtGhi@ZjBn@jCdO~d@xMfa@hAzDfArCDNAnAIn@Ob@kB|BoAnA_AhAs@t@{HnJcDpDcBjB}DzEc@h@sAhB_@`@NRdD~CuB|BkKbM{GzHkDzDiBzByNtP~DtDzArBdDvFxFfH`B`BVRf@VlCz@nFdAPD`A`@|@h@|@|@jBlBzAnBh@dAVv@v@lDZfAv@tBr@xAxMpU~GfMbDpGlMrXb@t@j@p@`A~@~@l@nJtD`[vMjf@`Tt@`@|@n@|AdBj@~@~@pBzIhWz@zBf@x@pAlAj@^hAh@~Ap@~At@vB`BbBbBhBnBxAjB^l@n@~AXfAXhC\\vEJ~@TpA\\vAr@pBxCxHjGrPb@jBZfBzBdQd@xBh@hAf@v@vOjSdB`CjAtBjE`JnHhNdNpWnCbFx@tAf@fAXp@b@pBHt@Dn@@xAEjAg@dHk@nJKbC?fDBfA\\vDRzAdBnIjLdi@|@vEbJxt@fB~NlAnJ^bBZdATj@z@xAfApAbA|@pAx@t@\\r@V|A^zXfFfDh@dB`@rCbApJ~DvEhBfBf@vD|@vHjAvBt@pB~@jAr@nHhBfEvBpCnA~Bp@tAT~BTbJX~DDfLGnMC~@Ft@T^P\\Vz@bAv@xAJ\\Lh@^vChF`h@rBxSZhAj@z@~@x@d\\tMlFbCdCrA`V|NxEzCh@`@l@h@hBrBhAhBlMhUlIrOh@jANp@Lv@?pAaE|r@AlCDrAT~Bb@lBZfARj@~@nB|@xAhAlA~@~@nCzBl@jA@RC^@HmIfMiCfF{Pb_@qL`WuV|h@us@t|Aw@zAmAdBmBpBq@n@uE~C{DhCwS`NqObKuBrAkBxAaAbAu@`Aw@lAaAtBi@dB]rAaElUmBbMiEtWeAhG]~AYbAk@vA[r@kAnBiL|OwAxAkM|PwA~AwAjAsGlE{TzNcD~Bg@b@gBlBqAlB{@dBg@nAe@~Ai@xCs@nFQx@Y|BwAxIqH|g@mEpZe@tCODo@jACRBRPl@bIjLvDzFnDdFlAfBLL@NBBENU~AaAdMk@nF_AdKs@f@KNLF",
    },
  },
};
