// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gizmo-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gizmo from 'gizmo';

export const metadata: Metadata = {
  resource: 'singlefamily.pricing.loans.all_in_pricing',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/singlefamily/pricing/loans/all-in-pricing/whole-loan-pricing',
  operationId: 'priceLoans',
};

export const tool: Tool = {
  name: 'create_whole_loan_pricing_loans_pricing_singlefamily_all_in_pricing',
  description: 'Returns loan-level all-in pricing and individual pricing components for whole-loans',
  inputSchema: {
    type: 'object',
    properties: {
      Context: {
        $ref: '#/$defs/context',
      },
      Loans: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            AmortizationRule: {
              type: 'object',
              properties: {
                loanAmortizationPeriodCount: {
                  type: 'string',
                },
                loanAmortizationType: {
                  type: 'string',
                  enum: ['AdjustableRate', 'Fixed'],
                },
                loanAmortizationMaximumTermMonthsCount: {
                  type: 'string',
                },
              },
              required: ['loanAmortizationPeriodCount', 'loanAmortizationType'],
            },
            InvestorLoanInformation: {
              type: 'object',
              properties: {
                investorRemittanceType: {
                  type: 'string',
                  enum: [
                    'ScheduledInterestActualPrincipal',
                    'ActualInterestActualPrincipal',
                    'ScheduledInterestScheduledPrincipal',
                  ],
                },
                baseGuarantyFeePercent: {
                  type: 'string',
                },
                guarantyFeeAfterAlternatePaymentMethodPercent: {
                  type: 'string',
                },
                guarantyFeePercent: {
                  type: 'string',
                },
                investorCollateralProgramIdentifier: {
                  type: 'string',
                  enum: ['ValueAcceptance'],
                },
                investorOwnershipPercent: {
                  type: 'string',
                },
                investorProductPlanIdentifier: {
                  type: 'string',
                },
                investorRemittanceDay: {
                  type: 'string',
                },
                loanAcquisitionScheduledUPBAmount: {
                  type: 'string',
                },
                loanDefaultLossPartyType: {
                  type: 'string',
                  enum: ['Lender', 'Unknown', 'Investor', 'Shared'],
                },
                REOMarketingPartyType: {
                  type: 'string',
                  enum: ['Unknown', 'Investor', 'Lender'],
                },
              },
              required: ['investorRemittanceType'],
            },
            LoanIdentifier: {
              type: 'object',
              properties: {
                sellerLoanIdentifier: {
                  type: 'string',
                },
                investorCommitmentIdentifier: {
                  type: 'string',
                },
                investorContractIdentifier: {
                  type: 'string',
                },
                investorLoanIdentifier: {
                  type: 'string',
                },
                loanIdentifier: {
                  type: 'string',
                },
                loanIdentifierType: {
                  type: 'string',
                  enum: ['UniversalLoan'],
                },
                MERS_MINIdentifier: {
                  type: 'string',
                },
              },
              required: ['sellerLoanIdentifier'],
            },
            Parties: {
              type: 'object',
              properties: {
                LoanSeller: {
                  type: 'object',
                  properties: {
                    partyRoleIdentifier: {
                      type: 'string',
                    },
                  },
                  required: ['partyRoleIdentifier'],
                },
                Appraiser: {
                  $ref: '#/$defs/appraiser_license',
                },
                AppraiserSupervisor: {
                  $ref: '#/$defs/appraiser_license',
                },
                Borrowers: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      Address: {
                        $ref: '#/$defs/address',
                      },
                      borrowerClassificationType: {
                        type: 'string',
                        enum: ['Secondary', 'Primary'],
                      },
                      borrowerMailToAddressSameAsPropertyIndicator: {
                        type: 'string',
                      },
                      borrowerQualifyingIncomeAmount: {
                        type: 'string',
                      },
                      CensusInformation: {
                        $ref: '#/$defs/census_information',
                      },
                      CounselingConfirmation: {
                        type: 'object',
                        properties: {
                          counselingConfirmationType: {
                            type: 'string',
                            enum: [
                              'MortgageInsuranceCompany',
                              'GovernmentAgency',
                              'LenderTrainedCounseling',
                              'HUDApprovedCounselingAgency',
                              'NoBorrowerCounseling',
                              'BorrowerDidNotParticipate',
                              'NonProfitOrganization',
                              'Other',
                            ],
                          },
                          counselingFormatType: {
                            type: 'string',
                            enum: [
                              'HomeStudy',
                              'BorrowerEducationNotRequired',
                              'Individual',
                              'Classroom',
                              'BorrowerDidNotParticipate',
                              'Other',
                            ],
                          },
                        },
                      },
                      CreditScore: {
                        type: 'object',
                        properties: {
                          creditReportIdentifier: {
                            type: 'string',
                          },
                          creditRepositorySourceIndicator: {
                            type: 'string',
                          },
                          creditRepositorySourceType: {
                            type: 'string',
                            enum: [
                              'TransUnion',
                              'Experian',
                              'Equifax',
                              'EquifaxAndExperian',
                              'EquifaxAndTransUnion',
                              'ExperianAndTransUnion',
                              'ExperianAndTransUnionAndEquifax',
                              'Other',
                            ],
                          },
                          creditScoreImpairmentType: {
                            type: 'string',
                            enum: ['InsufficientCreditHistory', 'SignificantErrorsScore'],
                          },
                          creditScoreValue: {
                            type: 'string',
                          },
                        },
                      },
                      Declaration: {
                        type: 'object',
                        properties: {
                          bankruptcyIndicator: {
                            type: 'string',
                          },
                          citizenshipResidencyType: {
                            type: 'string',
                            enum: ['PermanentResidentAlien', 'USCitizen', 'NonPermanentResidentAlien'],
                          },
                          loanForeclosureOrJudgmentIndicator: {
                            type: 'string',
                          },
                        },
                      },
                      Employment: {
                        type: 'object',
                        properties: {
                          employmentBorrowerSelfEmployedIndicator: {
                            type: 'string',
                          },
                        },
                      },
                      legalEntityType: {
                        type: 'string',
                        enum: [
                          'LimitedPartnership',
                          'Corporation',
                          'JointVenture',
                          'LimitedLiabilityCompany',
                          'GovernmentEntity',
                          'LandTrustAndBeneficiaryIsIndividual',
                          'Partnership',
                          'NonProfitCorporation',
                          'LivingTrust',
                          'Other',
                        ],
                      },
                    },
                  },
                },
                LoanOriginationCompany: {
                  type: 'object',
                  properties: {
                    partyRoleIdentifier: {
                      type: 'string',
                    },
                  },
                },
                LoanOriginator: {
                  type: 'object',
                  properties: {
                    loanOriginatorType: {
                      type: 'string',
                      enum: ['Correspondent', 'Lender', 'Broker'],
                    },
                    partyRoleIdentifier: {
                      type: 'string',
                    },
                  },
                },
                Servicer: {
                  type: 'object',
                  properties: {
                    partyRoleIdentifier: {
                      type: 'string',
                    },
                  },
                },
                WarehouseLender: {
                  type: 'object',
                  properties: {
                    partyRoleIdentifier: {
                      type: 'string',
                    },
                  },
                },
              },
              required: ['LoanSeller'],
            },
            TermsOfLoan: {
              type: 'object',
              properties: {
                lienPriorityType: {
                  type: 'string',
                  enum: ['FourthLien', 'ThirdLien', 'FirstLien', 'SecondLien'],
                },
                mortgageType: {
                  type: 'string',
                  enum: ['USDARuralHousing', 'VA', 'FHA', 'Conventional'],
                },
                noteRatePercent: {
                  type: 'string',
                },
                disclosedIndexRatePercent: {
                  type: 'string',
                },
                loanPurposeType: {
                  type: 'string',
                  enum: ['Refinance', 'Purchase'],
                },
                noteAmount: {
                  type: 'string',
                },
                noteDate: {
                  type: 'string',
                },
              },
              required: ['lienPriorityType', 'mortgageType', 'noteRatePercent'],
            },
            Adjustment: {
              type: 'object',
              properties: {
                InterestRateAdjustment: {
                  type: 'object',
                  properties: {
                    InterestRateLifetimeAdjustmentRule: {
                      type: 'object',
                      properties: {
                        ceilingRatePercent: {
                          type: 'string',
                        },
                        firstRateChangePaymentEffectiveDate: {
                          type: 'string',
                        },
                        floorRatePercent: {
                          type: 'string',
                        },
                        interestRateRoundingPercent: {
                          type: 'string',
                        },
                        interestRateRoundingType: {
                          type: 'string',
                          enum: ['NoRounding', 'Down', 'Nearest', 'Up'],
                        },
                        marginRatePercent: {
                          type: 'string',
                        },
                      },
                    },
                    InterestRatePerChangeAdjustmentRules: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          adjustmentRuleType: {
                            type: 'string',
                            enum: ['First', 'Subsequent'],
                          },
                          perChangeMaximumDecreaseRatePercent: {
                            type: 'string',
                          },
                          perChangeMaximumIncreaseRatePercent: {
                            type: 'string',
                          },
                          perChangeRateAdjustmentEffectiveDate: {
                            type: 'string',
                          },
                          perChangeRateAdjustmentFrequencyMonthsCount: {
                            type: 'string',
                          },
                        },
                      },
                    },
                  },
                },
                PrincipalAndInterestPaymentAdjustment: {
                  type: 'object',
                  properties: {
                    IndexRule: {
                      type: 'object',
                      properties: {
                        indexSourceType: {
                          type: 'string',
                          enum: [
                            '30DayAverageSOFR',
                            'Other',
                            '1YearTreasuryBill364DayDiscountRateWeeklyAuctionAverage',
                            '30year60DayConventionalFixedRateDaily',
                            '6MonthCDsSecondaryMarketWeeklyAverage',
                            '6MonthTBillAuctionHighDiscountRate',
                            '6MonthTreasuryBillAuctionHighDiscountRate',
                            '6MonthTreasuryBillAuctionHighInvestmentRate',
                            '6MonthTreasuryBillAuctionHighMonthlyAverage',
                            '6MonthTreasuryBillSecondaryMarketWeeklyAverage',
                            'CumulativeAverageForThePrevious12Months1YearTreasurySecurityMonthlyAverage',
                            'CumulativeAverageforthePrevious26WeeksWeeklyAverage',
                            'CumulativeAverageforthePrevious4WeeksWeeklyAverage6MonthAuctionHighDiscRate',
                            'CumulativeAverageforthePrevious4WeeksWeeklyAverage6MonthAuctionHighInvestmentRate',
                            'FreddieMacCostofFunds',
                            'QuarterlyAverageOfTheFederalCOFI',
                            'WallStreetJournalPrimeRate',
                            'WellsFargoCostofSavingsMonthly',
                          ],
                        },
                        interestAndPaymentAdjustmentIndexLeadDaysCount: {
                          type: 'string',
                        },
                      },
                    },
                    PrincipalAndInterestPaymentPerChangeAdjustmentRules: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          adjustmentRuleType: {
                            type: 'string',
                            enum: ['First', 'Subsequent'],
                          },
                          perChangePrincipalAndInterestPaymentAdjustmentPercent: {
                            type: 'string',
                          },
                        },
                      },
                    },
                  },
                },
                RateOrPaymentChangeOccurrence: {
                  type: 'object',
                  properties: {
                    convertibleStatusType: {
                      type: 'string',
                      enum: ['Active', 'Expired', 'Exercised'],
                    },
                    nextRateAdjustmentEffectiveDate: {
                      type: 'string',
                    },
                  },
                },
              },
            },
            AMI: {
              type: 'object',
              description: 'This is a custom Fannie Mae container.',
              properties: {
                loanLimitValueLimitType: {
                  type: 'string',
                  enum: ['H', 'S'],
                },
                loanLimitValueTypeCode: {
                  type: 'string',
                  enum: ['HBL'],
                },
                propertyAreaMedianIncomeAmount: {
                  type: 'string',
                },
              },
            },
            applicationReceivedDate: {
              type: 'string',
            },
            assumabilityIndicator: {
              type: 'string',
            },
            borrowerCount: {
              type: 'string',
            },
            Buydown: {
              type: 'object',
              properties: {
                BuydownContributor: {
                  type: 'object',
                  properties: {
                    buydownContributorType: {
                      type: 'string',
                      enum: ['Borrower', 'InterestedThirdParty', 'Lender', 'Other'],
                    },
                  },
                },
                BuydownRule: {
                  type: 'object',
                  properties: {
                    buydownChangeFrequencyMonthsCount: {
                      type: 'string',
                    },
                    buydownDurationMonthsCount: {
                      type: 'string',
                    },
                    buydownIncreaseRatePercent: {
                      type: 'string',
                    },
                    buydownInitialDiscountPercent: {
                      type: 'string',
                    },
                  },
                },
              },
            },
            buydownTemporarySubsidyIndicator: {
              type: 'string',
            },
            capitalizedLoanIndicator: {
              type: 'string',
            },
            ClosingInformation: {
              type: 'object',
              properties: {
                ClosingCostFunds: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      closingCostContributionAmount: {
                        type: 'string',
                      },
                      closingCostFundsType: {
                        type: 'string',
                        enum: [
                          'AggregatedRemainingTypes',
                          'PremiumFunds',
                          'GiftFunds',
                          'TradeEquity',
                          'BridgeLoan',
                          'EquityOnSoldProperty',
                          'StocksAndBonds',
                          'SecondaryFinancingClosedEnd',
                          'SaleOfChattel',
                          'TrustFunds',
                          'ForgivableSecuredLoan',
                          'Grant',
                          'CheckingSavings',
                          'SweatEquity',
                          'LotEquity',
                          'SecondaryFinancingHELOC',
                          'CreditCard',
                          'EquityOnSubjectProperty',
                          'CashOnHand',
                          'RetirementFunds',
                          'RentWithOptionToPurchase',
                          'SecuredLoan',
                          'UnsecuredBorrowedFunds',
                          'LifeInsuranceCashValue',
                          'Contribution',
                          'Other',
                        ],
                      },
                      closingCostSourceType: {
                        type: 'string',
                        enum: [
                          'USDARuralHousing',
                          'Relative',
                          'FHLBAffordableHousingProgram',
                          'ReligiousNonProfit',
                          'Borrower',
                          'Employer',
                          'FederalAgency',
                          'StateAgency',
                          'CommunityNonProfit',
                          'Lender',
                          'AggregatedRemainingSourceTypes',
                          'PropertySeller',
                          'LocalAgency',
                          'Other',
                        ],
                      },
                    },
                  },
                },
              },
            },
            CombinedLTV: {
              type: 'object',
              properties: {
                combinedLTVRatioPercent: {
                  type: 'string',
                },
                homeEquityCombinedLTVRatioPercent: {
                  type: 'string',
                },
              },
            },
            Commitment: {
              type: 'object',
              description: 'This is a custom Fannie Mae container.',
              properties: {
                commitmentCreatedDatetime: {
                  type: 'string',
                },
                commitmentPeriodDaysCount: {
                  type: 'string',
                },
                loanMinimumCouponRate: {
                  type: 'string',
                },
                servicingFeePercent: {
                  type: 'string',
                },
              },
            },
            Construction: {
              type: 'object',
              properties: {
                constructionLoanType: {
                  type: 'string',
                  enum: ['ConstructionToPermanent', 'NotAConstructionToPermanentLoan'],
                },
                constructionToPermanentClosingFeatureType: {
                  type: 'string',
                  enum: ['NewNote', 'AutomaticConversion', 'ModificationAgreement'],
                },
                constructionToPermanentClosingType: {
                  type: 'string',
                  enum: ['TwoClosing', 'OneClosing'],
                },
                constructionToPermanentFirstPaymentDueDate: {
                  type: 'string',
                },
              },
            },
            constructionLoanIndicator: {
              type: 'string',
            },
            convertibleIndicator: {
              type: 'string',
            },
            currentInterestRatePercent: {
              type: 'string',
            },
            DelinquencySummary: {
              type: 'object',
              properties: {
                delinquentPaymentsOverPastTwelveMonthsCount: {
                  type: 'string',
                },
              },
            },
            DownPayments: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  downPaymentAmount: {
                    type: 'string',
                  },
                  downPaymentSourceType: {
                    type: 'string',
                    enum: [
                      'OriginatingLender',
                      'USDARuralHousing',
                      'Relative',
                      'FHLBAffordableHousingProgram',
                      'ReligiousNonProfit',
                      'Borrower',
                      'Employer',
                      'FederalAgency',
                      'StateAgency',
                      'CommunityNonProfit',
                      'AggregatedRemainingSourceTypes',
                      'LocalAgency',
                      'Other',
                      'PropertySeller',
                    ],
                  },
                  downPaymentType: {
                    type: 'string',
                    enum: [
                      'Grant',
                      'CheckingSavings',
                      'SweatEquity',
                      'LotEquity',
                      'AggregatedRemainingTypes',
                      'SecuredBorrowedFunds',
                      'GiftFunds',
                      'SecondaryFinancingHELOC',
                      'TradeEquity',
                      'BridgeLoan',
                      'CashOnHand',
                      'EquityOnSoldProperty',
                      'RetirementFunds',
                      'StocksAndBonds',
                      'SecondaryFinancingClosedEnd',
                      'RentWithOptionToPurchase',
                      'SaleOfChattel',
                      'UnsecuredBorrowedFunds',
                      'TrustFunds',
                      'LifeInsuranceCashValue',
                      'ForgivableSecuredLoan',
                      'DepositOnSalesContract',
                      'EquityPendingFromSubjectProperty',
                      'EquityPendingFromSale',
                      'FHA_GiftSource',
                      'FHA_GiftSourceEmployer',
                      'FHA_GiftSourceGovernmentAssistance',
                      'FHA_GiftSourceRelative',
                      'Other',
                      'PledgedCollateral',
                      'PremiumFunds',
                      'SalesPriceAdjustment',
                      'EquityOnSubjectProperty',
                    ],
                  },
                },
              },
            },
            eNoteIndicator: {
              type: 'string',
            },
            Escrow: {
              type: 'object',
              properties: {
                escrowBalanceAmount: {
                  type: 'string',
                },
                EscrowItems: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      escrowItemType: {
                        type: 'string',
                        enum: [
                          'HailInsurance',
                          'CityPropertyTax',
                          'FloodInsurance',
                          'CountyBondTax',
                          'CondominiumAssociationDues',
                          'TownshipPropertyTax',
                          'WindstormInsurance',
                          'CooperativeAssociationSpecialAssessment',
                          'CondominiumAssociationSpecialAssessment',
                          'EnergyEfficientImprovementFunds',
                          'RehabilitationFunds',
                          'HazardInsurance',
                          'PestInsurance',
                          'VillagePropertyTax',
                          'PropertyTax',
                          'DistrictPropertyTax',
                          'MortgageInsurance',
                          'ParishTax',
                          'EarthquakeInsurance',
                          'HomeownersAssociationDues',
                          'StatePropertyTax',
                          'CityBondTax',
                          'ConstructionCompletionFunds',
                          'VolcanoInsurance',
                          'HomeownersAssociationSpecialAssessment',
                          'HomeownersInsurance',
                          'AssessmentTax',
                          'BoroughPropertyTax',
                          'CooperativeAssociationDues',
                          'SchoolPropertyTax',
                          'CountyPropertyTax',
                          'Other',
                          'TownPropertyTax',
                          'CreditDisabilityInsurance',
                          'CreditLifeInsurance',
                          'CreditPropertyInsurance',
                          'CreditUnemploymentInsurance',
                          'DebtCancellationInsurance',
                          'DebtSuspensionInsurance',
                          'GroundRent',
                          'LeaseHold',
                          'OtherTax',
                          'StormInsurance',
                        ],
                      },
                      escrowMonthlyPaymentAmount: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
            escrowIndicator: {
              type: 'string',
            },
            FNMLoanAcquisitionDate: {
              type: 'string',
            },
            FNMLoanDeliveryDate: {
              type: 'string',
            },
            FNMLoanForeclosureLossRiskType: {
              type: 'string',
              enum: [
                'Unknown',
                'SharedRiskFannieMaeMarkets',
                'FannieMae',
                'SharedRiskLenderMarkets',
                'Lender',
              ],
            },
            FNMRuleEffectiveDate: {
              type: 'string',
            },
            GovernmentLoan: {
              type: 'object',
              properties: {
                sectionOfActType: {
                  type: 'string',
                  enum: [
                    '234C',
                    '203K251',
                    '3710',
                    '203K',
                    '203H',
                    '203B',
                    '234C251',
                    '203B251',
                    '184',
                    '502',
                  ],
                },
              },
            },
            HMDALoan: {
              type: 'object',
              properties: {
                HMDA_HOEPALoanStatusIndicator: {
                  type: 'string',
                },
              },
            },
            initialFixedPeriodEffectiveMonthsCount: {
              type: 'string',
            },
            InterestCalculation: {
              type: 'object',
              properties: {
                InterestCalculationOccurrence: {
                  type: 'object',
                  properties: {
                    currentAccruedInterestAmount: {
                      type: 'string',
                    },
                  },
                },
                InterestCalculationRule: {
                  type: 'object',
                  properties: {
                    interestCalculationEffectiveMonthsCount: {
                      type: 'string',
                    },
                    interestCalculationPeriodType: {
                      type: 'string',
                      enum: ['Month', 'Biweekly', 'Day'],
                    },
                  },
                },
              },
            },
            InterestOnly: {
              type: 'object',
              properties: {
                interestOnlyEndDate: {
                  type: 'string',
                },
              },
            },
            InvestorFeature: {
              type: 'object',
              properties: {
                investorFeatureIdentifier: {
                  type: 'string',
                },
              },
            },
            loanAffordableIndicator: {
              type: 'string',
            },
            LoanFutureFeature: {
              type: 'object',
              description: 'This is a custom Fannie Mae container.',
              properties: {
                loanFutureFeatureCode: {
                  type: 'string',
                },
              },
            },
            LoanLevelCredit: {
              type: 'object',
              properties: {
                loanLevelCreditScoreSelectionMethodType: {
                  type: 'string',
                  enum: [
                    'SellerSpecific',
                    'MiddleOrLowerThenAverage',
                    'AverageThenAverage',
                    'AverageThenLowest',
                    'MiddleOrLowerThenLowest',
                    'Other',
                  ],
                },
                loanLevelCreditScoreValue: {
                  type: 'string',
                },
              },
            },
            LoanProduct: {
              type: 'object',
              properties: {
                FNMHomeImprovementProductType: {
                  type: 'string',
                  enum: [
                    'GovernmentTitleI',
                    'ActualActualBiweekly',
                    'DailySimpleInterestMBS',
                    'DailySimpleInterestCashConventional',
                    'ConstructionToPermanent',
                    'HomestyleRenovationMortgage',
                  ],
                },
                PriceLock: {
                  type: 'object',
                  properties: {
                    priceLockDatetime: {
                      type: 'string',
                    },
                  },
                },
                refinanceProgramIdentifier: {
                  type: 'string',
                  enum: ['DisasterResponse', 'HighLTVRefi', 'TexasEquity'],
                },
              },
            },
            LoanProgram: {
              type: 'object',
              properties: {
                loanProgramIdentifier: {
                  type: 'string',
                  enum: ['LoanFirstTimeHomebuyer'],
                },
              },
            },
            LTV: {
              type: 'object',
              properties: {
                baseLTVRatioPercent: {
                  type: 'string',
                },
                LTVRatioPercent: {
                  type: 'string',
                },
              },
            },
            MaturityRule: {
              type: 'object',
              properties: {
                loanMaturityDate: {
                  type: 'string',
                },
                loanMaturityPeriodCount: {
                  type: 'string',
                },
                loanMaturityPeriodType: {
                  type: 'string',
                  enum: ['Month'],
                },
              },
            },
            MIData: {
              type: 'object',
              properties: {
                MICertificateIdentifier: {
                  type: 'string',
                },
                MICompanyNameType: {
                  type: 'string',
                  enum: [
                    'MIF',
                    'NMI',
                    'Essent',
                    'MGIC',
                    'ArchMI',
                    'Radian',
                    'Enact',
                    'UGI',
                    'Other',
                    'MI_Waived',
                  ],
                },
                MICoveragePercent: {
                  type: 'string',
                },
                MIInterestRateAdjustmentPercent: {
                  type: 'string',
                },
                MIPremiumFinancedAmount: {
                  type: 'string',
                },
                MIPremiumFinancedIndicator: {
                  type: 'string',
                },
                MIPremiumSourceType: {
                  type: 'string',
                  enum: ['Borrower', 'Lender', 'Investor'],
                },
                primaryMIAbsenceReasonType: {
                  type: 'string',
                  enum: [
                    'InvestorPurchasedMortgageInsurance',
                    'MICanceledBasedOnCurrentLTV',
                    'NoMIBasedOnOriginalLTV',
                    'Repurchase',
                    'Other',
                    'NoMortgageInsurance',
                    'PoolInsurance',
                  ],
                },
              },
            },
            Mission: {
              type: 'object',
              description: 'This is a custom Fannie Mae container.',
              properties: {
                loanMissionScoreNumber: {
                  type: 'string',
                },
              },
            },
            Modification: {
              type: 'object',
              properties: {
                loanModificationEffectiveDate: {
                  type: 'string',
                },
              },
            },
            mortgageModificationIndicator: {
              type: 'string',
            },
            Payment: {
              type: 'object',
              properties: {
                PaymentComponentBreakout: {
                  type: 'object',
                  properties: {
                    principalAndInterestPaymentAmount: {
                      type: 'string',
                    },
                  },
                },
                PaymentRule: {
                  type: 'object',
                  properties: {
                    initialPrincipalAndInterestPaymentAmount: {
                      type: 'string',
                    },
                    paymentFrequencyType: {
                      type: 'string',
                      enum: ['Monthly'],
                    },
                    scheduledFirstPaymentDate: {
                      type: 'string',
                    },
                  },
                },
                PaymentSummary: {
                  type: 'object',
                  properties: {
                    aggregateLoanCurtailmentAmount: {
                      type: 'string',
                    },
                    lastPaidInstallmentDueDate: {
                      type: 'string',
                    },
                    lastPaymentReceivedDate: {
                      type: 'string',
                    },
                    UPBAmount: {
                      type: 'string',
                    },
                  },
                },
              },
            },
            Pool: {
              type: 'object',
              properties: {
                poolIdentifier: {
                  type: 'string',
                },
                poolIssueDate: {
                  type: 'string',
                },
                poolPrefixIdentifier: {
                  type: 'string',
                },
              },
            },
            prepaymentPenaltyIndicator: {
              type: 'string',
            },
            Product: {
              type: 'object',
              description: 'This is a custom Fannie Mae container.',
              properties: {
                MBSProductIdentifier: {
                  type: 'string',
                },
                MBSProductName: {
                  type: 'string',
                },
                WLProductIdentifier: {
                  type: 'string',
                },
              },
            },
            Qualification: {
              type: 'object',
              properties: {
                borrowerReservesMonthlyPaymentCount: {
                  type: 'string',
                },
                totalLiabilitiesMonthlyPaymentAmount: {
                  type: 'string',
                },
                totalMonthlyIncomeAmount: {
                  type: 'string',
                },
                totalMonthlyProposedHousingExpenseAmount: {
                  type: 'string',
                },
              },
            },
            Refinance: {
              type: 'object',
              properties: {
                refinanceCashOutAmount: {
                  type: 'string',
                },
                refinanceCashOutDeterminationType: {
                  type: 'string',
                  enum: ['NoCashOut', 'CashOut', 'LimitedCashOut'],
                },
              },
            },
            relocationLoanIndicator: {
              type: 'string',
            },
            sharedEquityIndicator: {
              type: 'string',
            },
            SubjectProperty: {
              type: 'object',
              properties: {
                Address: {
                  $ref: '#/$defs/address',
                },
                attachmentType: {
                  type: 'string',
                  enum: ['Attached', 'SemiDetached', 'Detached'],
                },
                CensusInformation: {
                  $ref: '#/$defs/census_information',
                },
                ConstructionMethod: {
                  type: 'object',
                  properties: {
                    constructionMethodType: {
                      type: 'string',
                      enum: [
                        'SiteBuilt',
                        'Manufactured',
                        'Other',
                        'Container',
                        'ThreeDimensionalPrintingTechnology',
                      ],
                    },
                  },
                },
                financedUnitCount: {
                  type: 'string',
                  enum: ['1', '2', '3', '4'],
                },
                FloodDetermination: {
                  type: 'object',
                  properties: {
                    specialFloodHazardAreaIndicator: {
                      type: 'string',
                    },
                  },
                },
                ManufacturedHome: {
                  type: 'object',
                  properties: {
                    manufacturedHomeWidthType: {
                      type: 'string',
                      enum: ['SingleWide', 'MultiWide'],
                    },
                  },
                },
                Project: {
                  type: 'object',
                  properties: {
                    condominiumProjectStatusType: {
                      type: 'string',
                      enum: ['New', 'Established'],
                    },
                    FNMCondominiumProjectManagerProjectIdentifier: {
                      type: 'string',
                    },
                    projectAttachmentType: {
                      type: 'string',
                      enum: ['Attached', 'Detached'],
                    },
                    projectClassificationIdentifier: {
                      type: 'string',
                      enum: ['E', 'F', 'G', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', '1', '2'],
                    },
                    projectDesignType: {
                      type: 'string',
                      enum: [
                        'OtherSelectedOnValuationDocumentation',
                        'MidriseProject',
                        'HighriseProject',
                        'TownhouseRowhouse',
                        'GardenProject',
                        'Other',
                        'LowriseProject',
                      ],
                    },
                    projectDwellingUnitCount: {
                      type: 'string',
                    },
                    projectDwellingUnitsSoldCount: {
                      type: 'string',
                    },
                    projectLegalStructureType: {
                      type: 'string',
                      enum: ['Condominium', 'Cooperative'],
                    },
                    PUDIndicator: {
                      type: 'string',
                    },
                  },
                },
                propertyEstateType: {
                  type: 'string',
                  enum: ['FeeSimple', 'Leasehold'],
                },
                propertyFloodInsuranceIndicator: {
                  type: 'string',
                },
                PropertyUnits: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      bedroomCount: {
                        type: 'string',
                      },
                      propertyDwellingUnitEligibleRentAmount: {
                        type: 'string',
                      },
                    },
                  },
                },
                propertyUsageType: {
                  type: 'string',
                  enum: ['PrimaryResidence', 'SecondHome', 'Investment'],
                },
                PropertyValuation: {
                  type: 'object',
                  properties: {
                    appraisalIdentifier: {
                      type: 'string',
                    },
                    AVM: {
                      type: 'object',
                      properties: {
                        AVMModelNameType: {
                          type: 'string',
                          enum: [
                            'ValuePoint4',
                            'MTM',
                            'ValueSure',
                            'Casa',
                            'Pass',
                            'HomePriceIndex',
                            'HomeValueExplorer',
                            'ValueFinder',
                            'ValueWizardPlus',
                            'ValueWizard',
                            'VeroValue',
                            'PropertySurveyAnalysisReport',
                            'HomePriceAnalyzer',
                            'Indicator',
                            'ValuePointPlus',
                            'AutomatedPropertyService',
                            'VeroIndexPlus',
                            'NetValue',
                            'ValuePoint',
                            'FidelityHansen',
                            'Other',
                          ],
                        },
                      },
                    },
                    propertyValuationAmount: {
                      type: 'string',
                    },
                    propertyValuationEffectiveDate: {
                      type: 'string',
                    },
                    propertyValuationFormType: {
                      type: 'string',
                      enum: [
                        'ExteriorOnlyInspectionResidentialAppraisalReport',
                        'OneUnitResidentialAppraisalFieldReviewReport',
                        'ExteriorOnlyInspectionIndividualCooperativeInterestAppraisalReport',
                        'TwoToFourUnitResidentialAppraisal',
                        'SmallResidentialIncomePropertyAppraisalReport',
                        'UniformResidentialAppraisalReport',
                        'ManufacturedHomeAppraisalReport',
                        'IndividualCooperativeInterestAppraisalReport',
                        'ExteriorOnlyInspectionIndividualCondominiumUnitAppraisalReport',
                        'IndividualCondominiumUnitAppraisalReport',
                      ],
                    },
                    propertyValuationMethodType: {
                      type: 'string',
                      enum: [
                        'DriveBy',
                        'AutomatedValuationModel',
                        'FieldReview',
                        'FullAppraisal',
                        'DesktopAppraisal',
                        'HybridAppraisal',
                        'PriorAppraisalUsed',
                        'TaxValuation',
                        'None',
                        'Other',
                      ],
                    },
                  },
                },
              },
            },
            totalMortgagedPropertiesCount: {
              type: 'string',
            },
            Underwriting: {
              type: 'object',
              properties: {
                AutomatedUnderwriting: {
                  type: 'object',
                  properties: {
                    automatedUnderwritingCaseIdentifier: {
                      type: 'string',
                    },
                    automatedUnderwritingRecommendationDescription: {
                      type: 'string',
                      enum: [
                        'Unknown',
                        'ExpandedApproval_I_Eligible',
                        'ExpandedApproval_I_Ineligible',
                        'ExpandedApproval_II_Eligible',
                        'ExpandedApproval_II_Ineligible',
                        'ExpandedApproval_III_Eligible',
                        'ExpandedApproval_III_Ineligible',
                        'ExpandedApprovalIV_Eligible',
                        'ExpandedApprovalIV_Ineligible',
                        'ApproveV_Eligible',
                        'ApproveV_Ineligible',
                        'ApproveVI_Eligible',
                        'ApproveVI_Ineligible',
                        'ApproveEligible',
                        'ApproveIneligible',
                        'Error',
                        'ExpandedApproval_I',
                        'ExpandedApproval_II',
                        'ExpandedApproval_III',
                        'OutOfScope',
                        'ReferWithCaution',
                        'ReferWithCaution_II',
                        'ReferWithCaution_IV',
                        'ReferEligible',
                        'ReferIneligible',
                        'Resubmit',
                      ],
                    },
                    automatedUnderwritingSystemType: {
                      type: 'string',
                      enum: ['GuaranteedUnderwritingSystem', 'DesktopUnderwriter', 'Other'],
                    },
                  },
                },
                loanManualUnderwritingIndicator: {
                  type: 'string',
                },
              },
            },
            URLA: {
              type: 'object',
              properties: {
                borrowerPaidDiscountPointsTotalAmount: {
                  type: 'string',
                },
                purchasePriceAmount: {
                  type: 'string',
                },
              },
            },
          },
          required: [
            'AmortizationRule',
            'InvestorLoanInformation',
            'LoanIdentifier',
            'Parties',
            'TermsOfLoan',
          ],
        },
      },
    },
    required: ['Context', 'Loans'],
    $defs: {
      context: {
        type: 'object',
        properties: {
          loanFinancialExecutionType: {
            type: 'string',
            enum: ['WholeLoan', 'MBS'],
          },
          pricingType: {
            type: 'string',
            enum: ['Loan'],
          },
          requestType: {
            type: 'string',
            enum: ['Browse'],
          },
          servicingExecutionType: {
            type: 'string',
            enum: ['Retained', 'Released'],
          },
          wholeLoanExecutionType: {
            type: 'string',
            enum: ['Mandatory', 'BestEfforts'],
          },
        },
      },
      appraiser_license: {
        type: 'object',
        properties: {
          appraiserLicenseIdentifier: {
            type: 'string',
          },
        },
      },
      address: {
        type: 'object',
        properties: {
          addressLineText: {
            type: 'string',
          },
          addressType: {
            type: 'string',
            enum: ['Mailing'],
          },
          cityName: {
            type: 'string',
          },
          postalCode: {
            type: 'string',
          },
          stateCode: {
            type: 'string',
            enum: [
              'DE',
              'HI',
              'PR',
              'TX',
              'MA',
              'MD',
              'IA',
              'ME',
              'ID',
              'MI',
              'UT',
              'MN',
              'MO',
              'IL',
              'IN',
              'MS',
              'MT',
              'AK',
              'AL',
              'VA',
              'AR',
              'VI',
              'NC',
              'ND',
              'NE',
              'RI',
              'AZ',
              'NH',
              'NJ',
              'VT',
              'NM',
              'FL',
              'NV',
              'WA',
              'NY',
              'SC',
              'SD',
              'WI',
              'OH',
              'GA',
              'OK',
              'CA',
              'WV',
              'WY',
              'OR',
              'KS',
              'CO',
              'GU',
              'KY',
              'CT',
              'PA',
              'LA',
              'TN',
              'DC',
            ],
          },
        },
      },
      census_information: {
        type: 'object',
        properties: {
          censusTractIdentifier: {
            type: 'string',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Gizmo, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await client.singlefamily.pricing.loans.allInPricing.createWholeLoanPricing(body),
  );
};

export default { metadata, tool, handler };
