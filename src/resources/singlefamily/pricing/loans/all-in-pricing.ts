// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AllInPricingAPI from './all-in-pricing';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * The Loan Pricing API provides lenders and technology service providers with a single, transparent response, combining various price factors to support informed best execution.
 */
export class AllInPricing extends APIResource {
  /**
   * Returns loan-level all-in pricing and individual pricing components for
   * whole-loans
   *
   * @example
   * ```ts
   * const response =
   *   await client.singlefamily.pricing.loans.allInPricing.createWholeLoanPricing({
   *     Context: {},
   *     Loans: [
   *       {
   *         AmortizationRule: { ... },
   *         InvestorLoanInformation: { ... },
   *         LoanIdentifier: { ... },
   *         Parties: { ... },
   *         TermsOfLoan: { ... },
   *       },
   *     ],
   *   });
   * ```
   */
  createWholeLoanPricing(
    body: AllInPricingCreateWholeLoanPricingParams,
    options?: RequestOptions,
  ): APIPromise<AllInPricingCreateWholeLoanPricingResponse> {
    return this._client.post('/singlefamily/pricing/loans/all-in-pricing/whole-loan-pricing', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.fnma.v2+json' }, options?.headers]),
    });
  }
}

export interface Address {
  addressLineText?: string;

  addressType?: 'Mailing';

  cityName?: string;

  postalCode?: string;

  stateCode?:
    | 'DE'
    | 'HI'
    | 'PR'
    | 'TX'
    | 'MA'
    | 'MD'
    | 'IA'
    | 'ME'
    | 'ID'
    | 'MI'
    | 'UT'
    | 'MN'
    | 'MO'
    | 'IL'
    | 'IN'
    | 'MS'
    | 'MT'
    | 'AK'
    | 'AL'
    | 'VA'
    | 'AR'
    | 'VI'
    | 'NC'
    | 'ND'
    | 'NE'
    | 'RI'
    | 'AZ'
    | 'NH'
    | 'NJ'
    | 'VT'
    | 'NM'
    | 'FL'
    | 'NV'
    | 'WA'
    | 'NY'
    | 'SC'
    | 'SD'
    | 'WI'
    | 'OH'
    | 'GA'
    | 'OK'
    | 'CA'
    | 'WV'
    | 'WY'
    | 'OR'
    | 'KS'
    | 'CO'
    | 'GU'
    | 'KY'
    | 'CT'
    | 'PA'
    | 'LA'
    | 'TN'
    | 'DC';
}

export interface AppraiserLicense {
  appraiserLicenseIdentifier?: string;
}

export interface CensusInformation {
  censusTractIdentifier?: string;
}

export interface Context {
  loanFinancialExecutionType?: 'WholeLoan' | 'MBS';

  pricingType?: 'Loan';

  requestType?: 'Browse';

  servicingExecutionType?: 'Retained' | 'Released';

  wholeLoanExecutionType?: 'Mandatory' | 'BestEfforts';
}

/**
 * Error Container
 */
export interface Error {
  code?: string;

  message?: string;
}

export interface ErrorMessage {
  code?: string;

  message?: string;
}

export interface SmpError {
  code?: string;

  message?: string;

  messageAttributes?: Array<SmpError.MessageAttribute>;

  type?: string;
}

export namespace SmpError {
  export interface MessageAttribute {
    name?: string;

    value?: string;
  }
}

export interface AllInPricingCreateWholeLoanPricingResponse {
  correlationId?: string;

  message?: string;

  path?: string;

  responsePayload?: AllInPricingCreateWholeLoanPricingResponse.ResponsePayload;

  status?: '200' | '400' | '500';

  timestamp?: string;

  userId?: string;
}

export namespace AllInPricingCreateWholeLoanPricingResponse {
  export interface ResponsePayload {
    context?: AllInPricingAPI.Context;

    errors?: Array<AllInPricingAPI.Error>;

    pricingResults?: Array<ResponsePayload.PricingResult>;
  }

  export namespace ResponsePayload {
    export interface PricingResult {
      errors?: Array<AllInPricingAPI.Error>;

      loanProductPricing?: Array<PricingResult.LoanProductPricing>;

      missionScoreData?: PricingResult.MissionScoreData;

      sellerLoanId?: string;

      status?: 200 | 207 | 400 | 500;
    }

    export namespace PricingResult {
      export interface LoanProductPricing {
        allInPrice?: LoanProductPricing.AllInPrice;

        baseLlpas?: LoanProductPricing.BaseLlpas;

        basePricing?: LoanProductPricing.BasePricing;

        srpResults?: LoanProductPricing.SrpResults;
      }

      export namespace LoanProductPricing {
        export interface AllInPrice {
          allInPrice?: number;

          errors?: Array<AllInPricingAPI.ErrorMessage>;
        }

        export interface BaseLlpas {
          errors?: Array<AllInPricingAPI.ErrorMessage>;

          responseData?: Array<BaseLlpas.ResponseData>;
        }

        export namespace BaseLlpas {
          export interface ResponseData {
            adjustments?: Array<ResponseData.Adjustment>;

            errors?: Array<AllInPricingAPI.ErrorMessage>;

            loanLevelPriceAdjustmentBPS?: number;

            totalPriceAdjustmentBPS?: number;

            totalPriceAdjustmentPercent?: number;
          }

          export namespace ResponseData {
            export interface Adjustment {
              loanPriceAdjustmentAmount?: number;

              loanPriceAdjustmentPercent?: number;

              loanPriceAdjustmentRuleName?: string;

              loanPriceAdjustmentType?: string;
            }
          }
        }

        export interface BasePricing {
          commitmentPeriod?: number;

          errors?: Array<BasePricing.Error>;

          executionType?: 'MANDATORY' | 'BESTEFFORTS';

          finalPrice?: number;

          gnr?: number;

          lptr?: number;

          pricingAsOfDate?: string;

          productId?: string;

          productName?: string;

          remittanceType?: 'SS' | 'AA' | 'SA';

          sellerNumber?: string;

          servicingFee?: number;

          underwritingMethod?: 'DU' | 'OTHER';
        }

        export namespace BasePricing {
          export interface Error {
            code?: string;

            message?: string;
          }
        }

        export interface SrpResults {
          errors?: Array<AllInPricingAPI.SmpError>;

          srpPricing?: Array<SrpResults.SrpPricing>;
        }

        export namespace SrpResults {
          export interface SrpPricing {
            bestExecutionIndicator?: boolean;

            commitmentIdentifier?: number;

            errors?: Array<AllInPricingAPI.SmpError>;

            sellerNumber?: number;

            servicerName?: string;

            servicerNumber?: number;

            srpGridId?: string;

            srpPrice?: SrpPricing.SrpPrice;
          }

          export namespace SrpPricing {
            export interface SrpPrice {
              fundedSrpProceeds?: number;

              grossSrp?: number;

              grossSrpPercent?: number;

              itemizedServicerFees?: Array<SrpPrice.ItemizedServicerFee>;

              netSrp?: number;

              netSrpPercent?: number;

              srpHoldBack?: number;

              srpHoldBackPercent?: number;

              totalServicerFees?: number;
            }

            export namespace SrpPrice {
              export interface ItemizedServicerFee {
                amount?: number;

                name?: string;
              }
            }
          }
        }
      }

      export interface MissionScoreData {
        borrowerDimensionScore?: '0' | '1';

        errors?: Array<AllInPricingAPI.Error>;

        incomeDimensionScore?: '0' | '1';

        /**
         * Represents the ratio of the total income to area median income represented as a
         * percentage.
         */
        incomeToAreaMedianIncomeRatio?: string;

        loanMissionScoreNumber?: '0' | '1' | '2' | '3';

        /**
         * The census tract identifier derived from geocoding the property address.
         */
        propertyCensusTractIdentifier?: string;

        /**
         * The individual mission score for each dimension of the total mission score.
         */
        propertyDimensionScore?: '0' | '1';
      }
    }
  }
}

export interface AllInPricingCreateWholeLoanPricingParams {
  Context: Context;

  Loans: Array<AllInPricingCreateWholeLoanPricingParams.Loan>;
}

export namespace AllInPricingCreateWholeLoanPricingParams {
  export interface Loan {
    AmortizationRule: Loan.AmortizationRule;

    InvestorLoanInformation: Loan.InvestorLoanInformation;

    LoanIdentifier: Loan.LoanIdentifier;

    Parties: Loan.Parties;

    TermsOfLoan: Loan.TermsOfLoan;

    Adjustment?: Loan.Adjustment;

    /**
     * This is a custom Fannie Mae container.
     */
    AMI?: Loan.Ami;

    applicationReceivedDate?: string;

    assumabilityIndicator?: string;

    borrowerCount?: string;

    Buydown?: Loan.Buydown;

    buydownTemporarySubsidyIndicator?: string;

    capitalizedLoanIndicator?: string;

    ClosingInformation?: Loan.ClosingInformation;

    CombinedLTV?: Loan.CombinedLtv;

    /**
     * This is a custom Fannie Mae container.
     */
    Commitment?: Loan.Commitment;

    Construction?: Loan.Construction;

    constructionLoanIndicator?: string;

    convertibleIndicator?: string;

    currentInterestRatePercent?: string;

    DelinquencySummary?: Loan.DelinquencySummary;

    DownPayments?: Array<Loan.DownPayment>;

    eNoteIndicator?: string;

    Escrow?: Loan.Escrow;

    escrowIndicator?: string;

    FNMLoanAcquisitionDate?: string;

    FNMLoanDeliveryDate?: string;

    FNMLoanForeclosureLossRiskType?:
      | 'Unknown'
      | 'SharedRiskFannieMaeMarkets'
      | 'FannieMae'
      | 'SharedRiskLenderMarkets'
      | 'Lender';

    FNMRuleEffectiveDate?: string;

    GovernmentLoan?: Loan.GovernmentLoan;

    HMDALoan?: Loan.HmdaLoan;

    initialFixedPeriodEffectiveMonthsCount?: string;

    InterestCalculation?: Loan.InterestCalculation;

    InterestOnly?: Loan.InterestOnly;

    InvestorFeature?: Loan.InvestorFeature;

    loanAffordableIndicator?: string;

    /**
     * This is a custom Fannie Mae container.
     */
    LoanFutureFeature?: Loan.LoanFutureFeature;

    LoanLevelCredit?: Loan.LoanLevelCredit;

    LoanProduct?: Loan.LoanProduct;

    LoanProgram?: Loan.LoanProgram;

    LTV?: Loan.Ltv;

    MaturityRule?: Loan.MaturityRule;

    MIData?: Loan.MiData;

    /**
     * This is a custom Fannie Mae container.
     */
    Mission?: Loan.Mission;

    Modification?: Loan.Modification;

    mortgageModificationIndicator?: string;

    Payment?: Loan.Payment;

    Pool?: Loan.Pool;

    prepaymentPenaltyIndicator?: string;

    /**
     * This is a custom Fannie Mae container.
     */
    Product?: Loan.Product;

    Qualification?: Loan.Qualification;

    Refinance?: Loan.Refinance;

    relocationLoanIndicator?: string;

    sharedEquityIndicator?: string;

    SubjectProperty?: Loan.SubjectProperty;

    totalMortgagedPropertiesCount?: string;

    Underwriting?: Loan.Underwriting;

    URLA?: Loan.Urla;
  }

  export namespace Loan {
    export interface AmortizationRule {
      loanAmortizationPeriodCount: string;

      loanAmortizationType: 'AdjustableRate' | 'Fixed';

      loanAmortizationMaximumTermMonthsCount?: string;
    }

    export interface InvestorLoanInformation {
      investorRemittanceType:
        | 'ScheduledInterestActualPrincipal'
        | 'ActualInterestActualPrincipal'
        | 'ScheduledInterestScheduledPrincipal';

      baseGuarantyFeePercent?: string;

      guarantyFeeAfterAlternatePaymentMethodPercent?: string;

      guarantyFeePercent?: string;

      investorCollateralProgramIdentifier?: 'ValueAcceptance';

      investorOwnershipPercent?: string;

      investorProductPlanIdentifier?: string;

      investorRemittanceDay?: string;

      loanAcquisitionScheduledUPBAmount?: string;

      loanDefaultLossPartyType?: 'Lender' | 'Unknown' | 'Investor' | 'Shared';

      REOMarketingPartyType?: 'Unknown' | 'Investor' | 'Lender';
    }

    export interface LoanIdentifier {
      sellerLoanIdentifier: string;

      investorCommitmentIdentifier?: string;

      investorContractIdentifier?: string;

      investorLoanIdentifier?: string;

      loanIdentifier?: string;

      loanIdentifierType?: 'UniversalLoan';

      MERS_MINIdentifier?: string;
    }

    export interface Parties {
      LoanSeller: Parties.LoanSeller;

      Appraiser?: AllInPricingAPI.AppraiserLicense;

      AppraiserSupervisor?: AllInPricingAPI.AppraiserLicense;

      Borrowers?: Array<Parties.Borrower>;

      LoanOriginationCompany?: Parties.LoanOriginationCompany;

      LoanOriginator?: Parties.LoanOriginator;

      Servicer?: Parties.Servicer;

      WarehouseLender?: Parties.WarehouseLender;
    }

    export namespace Parties {
      export interface LoanSeller {
        partyRoleIdentifier: string;
      }

      export interface Borrower {
        Address?: AllInPricingAPI.Address;

        borrowerClassificationType?: 'Secondary' | 'Primary';

        borrowerMailToAddressSameAsPropertyIndicator?: string;

        borrowerQualifyingIncomeAmount?: string;

        CensusInformation?: AllInPricingAPI.CensusInformation;

        CounselingConfirmation?: Borrower.CounselingConfirmation;

        CreditScore?: Borrower.CreditScore;

        Declaration?: Borrower.Declaration;

        Employment?: Borrower.Employment;

        legalEntityType?:
          | 'LimitedPartnership'
          | 'Corporation'
          | 'JointVenture'
          | 'LimitedLiabilityCompany'
          | 'GovernmentEntity'
          | 'LandTrustAndBeneficiaryIsIndividual'
          | 'Partnership'
          | 'NonProfitCorporation'
          | 'LivingTrust'
          | 'Other';
      }

      export namespace Borrower {
        export interface CounselingConfirmation {
          counselingConfirmationType?:
            | 'MortgageInsuranceCompany'
            | 'GovernmentAgency'
            | 'LenderTrainedCounseling'
            | 'HUDApprovedCounselingAgency'
            | 'NoBorrowerCounseling'
            | 'BorrowerDidNotParticipate'
            | 'NonProfitOrganization'
            | 'Other';

          counselingFormatType?:
            | 'HomeStudy'
            | 'BorrowerEducationNotRequired'
            | 'Individual'
            | 'Classroom'
            | 'BorrowerDidNotParticipate'
            | 'Other';
        }

        export interface CreditScore {
          creditReportIdentifier?: string;

          creditRepositorySourceIndicator?: string;

          creditRepositorySourceType?:
            | 'TransUnion'
            | 'Experian'
            | 'Equifax'
            | 'EquifaxAndExperian'
            | 'EquifaxAndTransUnion'
            | 'ExperianAndTransUnion'
            | 'ExperianAndTransUnionAndEquifax'
            | 'Other';

          creditScoreImpairmentType?: 'InsufficientCreditHistory' | 'SignificantErrorsScore';

          creditScoreValue?: string;
        }

        export interface Declaration {
          bankruptcyIndicator?: string;

          citizenshipResidencyType?: 'PermanentResidentAlien' | 'USCitizen' | 'NonPermanentResidentAlien';

          loanForeclosureOrJudgmentIndicator?: string;
        }

        export interface Employment {
          employmentBorrowerSelfEmployedIndicator?: string;
        }
      }

      export interface LoanOriginationCompany {
        partyRoleIdentifier?: string;
      }

      export interface LoanOriginator {
        loanOriginatorType?: 'Correspondent' | 'Lender' | 'Broker';

        partyRoleIdentifier?: string;
      }

      export interface Servicer {
        partyRoleIdentifier?: string;
      }

      export interface WarehouseLender {
        partyRoleIdentifier?: string;
      }
    }

    export interface TermsOfLoan {
      lienPriorityType: 'FourthLien' | 'ThirdLien' | 'FirstLien' | 'SecondLien';

      mortgageType: 'USDARuralHousing' | 'VA' | 'FHA' | 'Conventional';

      noteRatePercent: string;

      disclosedIndexRatePercent?: string;

      loanPurposeType?: 'Refinance' | 'Purchase';

      noteAmount?: string;

      noteDate?: string;
    }

    export interface Adjustment {
      InterestRateAdjustment?: Adjustment.InterestRateAdjustment;

      PrincipalAndInterestPaymentAdjustment?: Adjustment.PrincipalAndInterestPaymentAdjustment;

      RateOrPaymentChangeOccurrence?: Adjustment.RateOrPaymentChangeOccurrence;
    }

    export namespace Adjustment {
      export interface InterestRateAdjustment {
        InterestRateLifetimeAdjustmentRule?: InterestRateAdjustment.InterestRateLifetimeAdjustmentRule;

        InterestRatePerChangeAdjustmentRules?: Array<InterestRateAdjustment.InterestRatePerChangeAdjustmentRule>;
      }

      export namespace InterestRateAdjustment {
        export interface InterestRateLifetimeAdjustmentRule {
          ceilingRatePercent?: string;

          firstRateChangePaymentEffectiveDate?: string;

          floorRatePercent?: string;

          interestRateRoundingPercent?: string;

          interestRateRoundingType?: 'NoRounding' | 'Down' | 'Nearest' | 'Up';

          marginRatePercent?: string;
        }

        export interface InterestRatePerChangeAdjustmentRule {
          adjustmentRuleType?: 'First' | 'Subsequent';

          perChangeMaximumDecreaseRatePercent?: string;

          perChangeMaximumIncreaseRatePercent?: string;

          perChangeRateAdjustmentEffectiveDate?: string;

          perChangeRateAdjustmentFrequencyMonthsCount?: string;
        }
      }

      export interface PrincipalAndInterestPaymentAdjustment {
        IndexRule?: PrincipalAndInterestPaymentAdjustment.IndexRule;

        PrincipalAndInterestPaymentPerChangeAdjustmentRules?: Array<PrincipalAndInterestPaymentAdjustment.PrincipalAndInterestPaymentPerChangeAdjustmentRule>;
      }

      export namespace PrincipalAndInterestPaymentAdjustment {
        export interface IndexRule {
          indexSourceType?:
            | '30DayAverageSOFR'
            | 'Other'
            | '1YearTreasuryBill364DayDiscountRateWeeklyAuctionAverage'
            | '30year60DayConventionalFixedRateDaily'
            | '6MonthCDsSecondaryMarketWeeklyAverage'
            | '6MonthTBillAuctionHighDiscountRate'
            | '6MonthTreasuryBillAuctionHighDiscountRate'
            | '6MonthTreasuryBillAuctionHighInvestmentRate'
            | '6MonthTreasuryBillAuctionHighMonthlyAverage'
            | '6MonthTreasuryBillSecondaryMarketWeeklyAverage'
            | 'CumulativeAverageForThePrevious12Months1YearTreasurySecurityMonthlyAverage'
            | 'CumulativeAverageforthePrevious26WeeksWeeklyAverage'
            | 'CumulativeAverageforthePrevious4WeeksWeeklyAverage6MonthAuctionHighDiscRate'
            | 'CumulativeAverageforthePrevious4WeeksWeeklyAverage6MonthAuctionHighInvestmentRate'
            | 'FreddieMacCostofFunds'
            | 'QuarterlyAverageOfTheFederalCOFI'
            | 'WallStreetJournalPrimeRate'
            | 'WellsFargoCostofSavingsMonthly';

          interestAndPaymentAdjustmentIndexLeadDaysCount?: string;
        }

        export interface PrincipalAndInterestPaymentPerChangeAdjustmentRule {
          adjustmentRuleType?: 'First' | 'Subsequent';

          perChangePrincipalAndInterestPaymentAdjustmentPercent?: string;
        }
      }

      export interface RateOrPaymentChangeOccurrence {
        convertibleStatusType?: 'Active' | 'Expired' | 'Exercised';

        nextRateAdjustmentEffectiveDate?: string;
      }
    }

    /**
     * This is a custom Fannie Mae container.
     */
    export interface Ami {
      loanLimitValueLimitType?: 'H' | 'S';

      loanLimitValueTypeCode?: 'HBL';

      propertyAreaMedianIncomeAmount?: string;
    }

    export interface Buydown {
      BuydownContributor?: Buydown.BuydownContributor;

      BuydownRule?: Buydown.BuydownRule;
    }

    export namespace Buydown {
      export interface BuydownContributor {
        buydownContributorType?: 'Borrower' | 'InterestedThirdParty' | 'Lender' | 'Other';
      }

      export interface BuydownRule {
        buydownChangeFrequencyMonthsCount?: string;

        buydownDurationMonthsCount?: string;

        buydownIncreaseRatePercent?: string;

        buydownInitialDiscountPercent?: string;
      }
    }

    export interface ClosingInformation {
      ClosingCostFunds?: Array<ClosingInformation.ClosingCostFund>;
    }

    export namespace ClosingInformation {
      export interface ClosingCostFund {
        closingCostContributionAmount?: string;

        closingCostFundsType?:
          | 'AggregatedRemainingTypes'
          | 'PremiumFunds'
          | 'GiftFunds'
          | 'TradeEquity'
          | 'BridgeLoan'
          | 'EquityOnSoldProperty'
          | 'StocksAndBonds'
          | 'SecondaryFinancingClosedEnd'
          | 'SaleOfChattel'
          | 'TrustFunds'
          | 'ForgivableSecuredLoan'
          | 'Grant'
          | 'CheckingSavings'
          | 'SweatEquity'
          | 'LotEquity'
          | 'SecondaryFinancingHELOC'
          | 'CreditCard'
          | 'EquityOnSubjectProperty'
          | 'CashOnHand'
          | 'RetirementFunds'
          | 'RentWithOptionToPurchase'
          | 'SecuredLoan'
          | 'UnsecuredBorrowedFunds'
          | 'LifeInsuranceCashValue'
          | 'Contribution'
          | 'Other';

        closingCostSourceType?:
          | 'USDARuralHousing'
          | 'Relative'
          | 'FHLBAffordableHousingProgram'
          | 'ReligiousNonProfit'
          | 'Borrower'
          | 'Employer'
          | 'FederalAgency'
          | 'StateAgency'
          | 'CommunityNonProfit'
          | 'Lender'
          | 'AggregatedRemainingSourceTypes'
          | 'PropertySeller'
          | 'LocalAgency'
          | 'Other';
      }
    }

    export interface CombinedLtv {
      combinedLTVRatioPercent?: string;

      homeEquityCombinedLTVRatioPercent?: string;
    }

    /**
     * This is a custom Fannie Mae container.
     */
    export interface Commitment {
      commitmentCreatedDatetime?: string;

      commitmentPeriodDaysCount?: string;

      loanMinimumCouponRate?: string;

      servicingFeePercent?: string;
    }

    export interface Construction {
      constructionLoanType?: 'ConstructionToPermanent' | 'NotAConstructionToPermanentLoan';

      constructionToPermanentClosingFeatureType?: 'NewNote' | 'AutomaticConversion' | 'ModificationAgreement';

      constructionToPermanentClosingType?: 'TwoClosing' | 'OneClosing';

      constructionToPermanentFirstPaymentDueDate?: string;
    }

    export interface DelinquencySummary {
      delinquentPaymentsOverPastTwelveMonthsCount?: string;
    }

    export interface DownPayment {
      downPaymentAmount?: string;

      downPaymentSourceType?:
        | 'OriginatingLender'
        | 'USDARuralHousing'
        | 'Relative'
        | 'FHLBAffordableHousingProgram'
        | 'ReligiousNonProfit'
        | 'Borrower'
        | 'Employer'
        | 'FederalAgency'
        | 'StateAgency'
        | 'CommunityNonProfit'
        | 'AggregatedRemainingSourceTypes'
        | 'LocalAgency'
        | 'Other'
        | 'PropertySeller';

      downPaymentType?:
        | 'Grant'
        | 'CheckingSavings'
        | 'SweatEquity'
        | 'LotEquity'
        | 'AggregatedRemainingTypes'
        | 'SecuredBorrowedFunds'
        | 'GiftFunds'
        | 'SecondaryFinancingHELOC'
        | 'TradeEquity'
        | 'BridgeLoan'
        | 'CashOnHand'
        | 'EquityOnSoldProperty'
        | 'RetirementFunds'
        | 'StocksAndBonds'
        | 'SecondaryFinancingClosedEnd'
        | 'RentWithOptionToPurchase'
        | 'SaleOfChattel'
        | 'UnsecuredBorrowedFunds'
        | 'TrustFunds'
        | 'LifeInsuranceCashValue'
        | 'ForgivableSecuredLoan'
        | 'DepositOnSalesContract'
        | 'EquityPendingFromSubjectProperty'
        | 'EquityPendingFromSale'
        | 'FHA_GiftSource'
        | 'FHA_GiftSourceEmployer'
        | 'FHA_GiftSourceGovernmentAssistance'
        | 'FHA_GiftSourceRelative'
        | 'Other'
        | 'PledgedCollateral'
        | 'PremiumFunds'
        | 'SalesPriceAdjustment'
        | 'EquityOnSubjectProperty';
    }

    export interface Escrow {
      escrowBalanceAmount?: string;

      EscrowItems?: Array<Escrow.EscrowItem>;
    }

    export namespace Escrow {
      export interface EscrowItem {
        escrowItemType?:
          | 'HailInsurance'
          | 'CityPropertyTax'
          | 'FloodInsurance'
          | 'CountyBondTax'
          | 'CondominiumAssociationDues'
          | 'TownshipPropertyTax'
          | 'WindstormInsurance'
          | 'CooperativeAssociationSpecialAssessment'
          | 'CondominiumAssociationSpecialAssessment'
          | 'EnergyEfficientImprovementFunds'
          | 'RehabilitationFunds'
          | 'HazardInsurance'
          | 'PestInsurance'
          | 'VillagePropertyTax'
          | 'PropertyTax'
          | 'DistrictPropertyTax'
          | 'MortgageInsurance'
          | 'ParishTax'
          | 'EarthquakeInsurance'
          | 'HomeownersAssociationDues'
          | 'StatePropertyTax'
          | 'CityBondTax'
          | 'ConstructionCompletionFunds'
          | 'VolcanoInsurance'
          | 'HomeownersAssociationSpecialAssessment'
          | 'HomeownersInsurance'
          | 'AssessmentTax'
          | 'BoroughPropertyTax'
          | 'CooperativeAssociationDues'
          | 'SchoolPropertyTax'
          | 'CountyPropertyTax'
          | 'Other'
          | 'TownPropertyTax'
          | 'CreditDisabilityInsurance'
          | 'CreditLifeInsurance'
          | 'CreditPropertyInsurance'
          | 'CreditUnemploymentInsurance'
          | 'DebtCancellationInsurance'
          | 'DebtSuspensionInsurance'
          | 'GroundRent'
          | 'LeaseHold'
          | 'OtherTax'
          | 'StormInsurance';

        escrowMonthlyPaymentAmount?: string;
      }
    }

    export interface GovernmentLoan {
      sectionOfActType?:
        | '234C'
        | '203K251'
        | '3710'
        | '203K'
        | '203H'
        | '203B'
        | '234C251'
        | '203B251'
        | '184'
        | '502';
    }

    export interface HmdaLoan {
      HMDA_HOEPALoanStatusIndicator?: string;
    }

    export interface InterestCalculation {
      InterestCalculationOccurrence?: InterestCalculation.InterestCalculationOccurrence;

      InterestCalculationRule?: InterestCalculation.InterestCalculationRule;
    }

    export namespace InterestCalculation {
      export interface InterestCalculationOccurrence {
        currentAccruedInterestAmount?: string;
      }

      export interface InterestCalculationRule {
        interestCalculationEffectiveMonthsCount?: string;

        interestCalculationPeriodType?: 'Month' | 'Biweekly' | 'Day';
      }
    }

    export interface InterestOnly {
      interestOnlyEndDate?: string;
    }

    export interface InvestorFeature {
      investorFeatureIdentifier?: string;
    }

    /**
     * This is a custom Fannie Mae container.
     */
    export interface LoanFutureFeature {
      loanFutureFeatureCode?: string;
    }

    export interface LoanLevelCredit {
      loanLevelCreditScoreSelectionMethodType?:
        | 'SellerSpecific'
        | 'MiddleOrLowerThenAverage'
        | 'AverageThenAverage'
        | 'AverageThenLowest'
        | 'MiddleOrLowerThenLowest'
        | 'Other';

      loanLevelCreditScoreValue?: string;
    }

    export interface LoanProduct {
      FNMHomeImprovementProductType?:
        | 'GovernmentTitleI'
        | 'ActualActualBiweekly'
        | 'DailySimpleInterestMBS'
        | 'DailySimpleInterestCashConventional'
        | 'ConstructionToPermanent'
        | 'HomestyleRenovationMortgage';

      PriceLock?: LoanProduct.PriceLock;

      refinanceProgramIdentifier?: 'DisasterResponse' | 'HighLTVRefi' | 'TexasEquity';
    }

    export namespace LoanProduct {
      export interface PriceLock {
        priceLockDatetime?: string;
      }
    }

    export interface LoanProgram {
      loanProgramIdentifier?: 'LoanFirstTimeHomebuyer';
    }

    export interface Ltv {
      baseLTVRatioPercent?: string;

      LTVRatioPercent?: string;
    }

    export interface MaturityRule {
      loanMaturityDate?: string;

      loanMaturityPeriodCount?: string;

      loanMaturityPeriodType?: 'Month';
    }

    export interface MiData {
      MICertificateIdentifier?: string;

      MICompanyNameType?:
        | 'MIF'
        | 'NMI'
        | 'Essent'
        | 'MGIC'
        | 'ArchMI'
        | 'Radian'
        | 'Enact'
        | 'UGI'
        | 'Other'
        | 'MI_Waived';

      MICoveragePercent?: string;

      MIInterestRateAdjustmentPercent?: string;

      MIPremiumFinancedAmount?: string;

      MIPremiumFinancedIndicator?: string;

      MIPremiumSourceType?: 'Borrower' | 'Lender' | 'Investor';

      primaryMIAbsenceReasonType?:
        | 'InvestorPurchasedMortgageInsurance'
        | 'MICanceledBasedOnCurrentLTV'
        | 'NoMIBasedOnOriginalLTV'
        | 'Repurchase'
        | 'Other'
        | 'NoMortgageInsurance'
        | 'PoolInsurance';
    }

    /**
     * This is a custom Fannie Mae container.
     */
    export interface Mission {
      loanMissionScoreNumber?: string;
    }

    export interface Modification {
      loanModificationEffectiveDate?: string;
    }

    export interface Payment {
      PaymentComponentBreakout?: Payment.PaymentComponentBreakout;

      PaymentRule?: Payment.PaymentRule;

      PaymentSummary?: Payment.PaymentSummary;
    }

    export namespace Payment {
      export interface PaymentComponentBreakout {
        principalAndInterestPaymentAmount?: string;
      }

      export interface PaymentRule {
        initialPrincipalAndInterestPaymentAmount?: string;

        paymentFrequencyType?: 'Monthly';

        scheduledFirstPaymentDate?: string;
      }

      export interface PaymentSummary {
        aggregateLoanCurtailmentAmount?: string;

        lastPaidInstallmentDueDate?: string;

        lastPaymentReceivedDate?: string;

        UPBAmount?: string;
      }
    }

    export interface Pool {
      poolIdentifier?: string;

      poolIssueDate?: string;

      poolPrefixIdentifier?: string;
    }

    /**
     * This is a custom Fannie Mae container.
     */
    export interface Product {
      MBSProductIdentifier?: string;

      MBSProductName?: string;

      WLProductIdentifier?: string;
    }

    export interface Qualification {
      borrowerReservesMonthlyPaymentCount?: string;

      totalLiabilitiesMonthlyPaymentAmount?: string;

      totalMonthlyIncomeAmount?: string;

      totalMonthlyProposedHousingExpenseAmount?: string;
    }

    export interface Refinance {
      refinanceCashOutAmount?: string;

      refinanceCashOutDeterminationType?: 'NoCashOut' | 'CashOut' | 'LimitedCashOut';
    }

    export interface SubjectProperty {
      Address?: AllInPricingAPI.Address;

      attachmentType?: 'Attached' | 'SemiDetached' | 'Detached';

      CensusInformation?: AllInPricingAPI.CensusInformation;

      ConstructionMethod?: SubjectProperty.ConstructionMethod;

      financedUnitCount?: '1' | '2' | '3' | '4';

      FloodDetermination?: SubjectProperty.FloodDetermination;

      ManufacturedHome?: SubjectProperty.ManufacturedHome;

      Project?: SubjectProperty.Project;

      propertyEstateType?: 'FeeSimple' | 'Leasehold';

      propertyFloodInsuranceIndicator?: string;

      PropertyUnits?: Array<SubjectProperty.PropertyUnit>;

      propertyUsageType?: 'PrimaryResidence' | 'SecondHome' | 'Investment';

      PropertyValuation?: SubjectProperty.PropertyValuation;
    }

    export namespace SubjectProperty {
      export interface ConstructionMethod {
        constructionMethodType?:
          | 'SiteBuilt'
          | 'Manufactured'
          | 'Other'
          | 'Container'
          | 'ThreeDimensionalPrintingTechnology';
      }

      export interface FloodDetermination {
        specialFloodHazardAreaIndicator?: string;
      }

      export interface ManufacturedHome {
        manufacturedHomeWidthType?: 'SingleWide' | 'MultiWide';
      }

      export interface Project {
        condominiumProjectStatusType?: 'New' | 'Established';

        FNMCondominiumProjectManagerProjectIdentifier?: string;

        projectAttachmentType?: 'Attached' | 'Detached';

        projectClassificationIdentifier?:
          | 'E'
          | 'F'
          | 'G'
          | 'P'
          | 'Q'
          | 'R'
          | 'S'
          | 'T'
          | 'U'
          | 'V'
          | '1'
          | '2';

        projectDesignType?:
          | 'OtherSelectedOnValuationDocumentation'
          | 'MidriseProject'
          | 'HighriseProject'
          | 'TownhouseRowhouse'
          | 'GardenProject'
          | 'Other'
          | 'LowriseProject';

        projectDwellingUnitCount?: string;

        projectDwellingUnitsSoldCount?: string;

        projectLegalStructureType?: 'Condominium' | 'Cooperative';

        PUDIndicator?: string;
      }

      export interface PropertyUnit {
        bedroomCount?: string;

        propertyDwellingUnitEligibleRentAmount?: string;
      }

      export interface PropertyValuation {
        appraisalIdentifier?: string;

        AVM?: PropertyValuation.Avm;

        propertyValuationAmount?: string;

        propertyValuationEffectiveDate?: string;

        propertyValuationFormType?:
          | 'ExteriorOnlyInspectionResidentialAppraisalReport'
          | 'OneUnitResidentialAppraisalFieldReviewReport'
          | 'ExteriorOnlyInspectionIndividualCooperativeInterestAppraisalReport'
          | 'TwoToFourUnitResidentialAppraisal'
          | 'SmallResidentialIncomePropertyAppraisalReport'
          | 'UniformResidentialAppraisalReport'
          | 'ManufacturedHomeAppraisalReport'
          | 'IndividualCooperativeInterestAppraisalReport'
          | 'ExteriorOnlyInspectionIndividualCondominiumUnitAppraisalReport'
          | 'IndividualCondominiumUnitAppraisalReport';

        propertyValuationMethodType?:
          | 'DriveBy'
          | 'AutomatedValuationModel'
          | 'FieldReview'
          | 'FullAppraisal'
          | 'DesktopAppraisal'
          | 'HybridAppraisal'
          | 'PriorAppraisalUsed'
          | 'TaxValuation'
          | 'None'
          | 'Other';
      }

      export namespace PropertyValuation {
        export interface Avm {
          AVMModelNameType?:
            | 'ValuePoint4'
            | 'MTM'
            | 'ValueSure'
            | 'Casa'
            | 'Pass'
            | 'HomePriceIndex'
            | 'HomeValueExplorer'
            | 'ValueFinder'
            | 'ValueWizardPlus'
            | 'ValueWizard'
            | 'VeroValue'
            | 'PropertySurveyAnalysisReport'
            | 'HomePriceAnalyzer'
            | 'Indicator'
            | 'ValuePointPlus'
            | 'AutomatedPropertyService'
            | 'VeroIndexPlus'
            | 'NetValue'
            | 'ValuePoint'
            | 'FidelityHansen'
            | 'Other';
        }
      }
    }

    export interface Underwriting {
      AutomatedUnderwriting?: Underwriting.AutomatedUnderwriting;

      loanManualUnderwritingIndicator?: string;
    }

    export namespace Underwriting {
      export interface AutomatedUnderwriting {
        automatedUnderwritingCaseIdentifier?: string;

        automatedUnderwritingRecommendationDescription?:
          | 'Unknown'
          | 'ExpandedApproval_I_Eligible'
          | 'ExpandedApproval_I_Ineligible'
          | 'ExpandedApproval_II_Eligible'
          | 'ExpandedApproval_II_Ineligible'
          | 'ExpandedApproval_III_Eligible'
          | 'ExpandedApproval_III_Ineligible'
          | 'ExpandedApprovalIV_Eligible'
          | 'ExpandedApprovalIV_Ineligible'
          | 'ApproveV_Eligible'
          | 'ApproveV_Ineligible'
          | 'ApproveVI_Eligible'
          | 'ApproveVI_Ineligible'
          | 'ApproveEligible'
          | 'ApproveIneligible'
          | 'Error'
          | 'ExpandedApproval_I'
          | 'ExpandedApproval_II'
          | 'ExpandedApproval_III'
          | 'OutOfScope'
          | 'ReferWithCaution'
          | 'ReferWithCaution_II'
          | 'ReferWithCaution_IV'
          | 'ReferEligible'
          | 'ReferIneligible'
          | 'Resubmit';

        automatedUnderwritingSystemType?: 'GuaranteedUnderwritingSystem' | 'DesktopUnderwriter' | 'Other';
      }
    }

    export interface Urla {
      borrowerPaidDiscountPointsTotalAmount?: string;

      purchasePriceAmount?: string;
    }
  }
}

export declare namespace AllInPricing {
  export {
    type Address as Address,
    type AppraiserLicense as AppraiserLicense,
    type CensusInformation as CensusInformation,
    type Context as Context,
    type Error as Error,
    type ErrorMessage as ErrorMessage,
    type SmpError as SmpError,
    type AllInPricingCreateWholeLoanPricingResponse as AllInPricingCreateWholeLoanPricingResponse,
    type AllInPricingCreateWholeLoanPricingParams as AllInPricingCreateWholeLoanPricingParams,
  };
}
