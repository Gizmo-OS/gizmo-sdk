// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gizmo from 'gizmo';

const client = new Gizmo({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource allInPricing', () => {
  // Prism tests are disabled
  test.skip('createWholeLoanPricing: only required params', async () => {
    const responsePromise = client.singlefamily.pricing.loans.allInPricing.createWholeLoanPricing({
      Context: {},
      Loans: [
        {
          AmortizationRule: {
            loanAmortizationPeriodCount: '26912511',
            loanAmortizationType: 'AdjustableRate',
          },
          InvestorLoanInformation: { investorRemittanceType: 'ScheduledInterestActualPrincipal' },
          LoanIdentifier: { sellerLoanIdentifier: 'sQ--?w_lZ?!!' },
          Parties: { LoanSeller: { partyRoleIdentifier: 'partyRoleIdentifier' } },
          TermsOfLoan: {
            lienPriorityType: 'FourthLien',
            mortgageType: 'USDARuralHousing',
            noteRatePercent: '321669910225',
          },
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createWholeLoanPricing: required and optional params', async () => {
    const response = await client.singlefamily.pricing.loans.allInPricing.createWholeLoanPricing({
      Context: {
        loanFinancialExecutionType: 'WholeLoan',
        pricingType: 'Loan',
        requestType: 'Browse',
        servicingExecutionType: 'Retained',
        wholeLoanExecutionType: 'Mandatory',
      },
      Loans: [
        {
          AmortizationRule: {
            loanAmortizationPeriodCount: '26912511',
            loanAmortizationType: 'AdjustableRate',
            loanAmortizationMaximumTermMonthsCount: '26912511',
          },
          InvestorLoanInformation: {
            investorRemittanceType: 'ScheduledInterestActualPrincipal',
            baseGuarantyFeePercent: '321669910225',
            guarantyFeeAfterAlternatePaymentMethodPercent: '321669910225',
            guarantyFeePercent: '321669910225',
            investorCollateralProgramIdentifier: 'ValueAcceptance',
            investorOwnershipPercent: '321669910225',
            investorProductPlanIdentifier: 'investorProductPlanIdentifier',
            investorRemittanceDay: '---30',
            loanAcquisitionScheduledUPBAmount: '321669910225',
            loanDefaultLossPartyType: 'Lender',
            REOMarketingPartyType: 'Unknown',
          },
          LoanIdentifier: {
            sellerLoanIdentifier: 'sQ--?w_lZ?!!',
            investorCommitmentIdentifier: 'investorCommitmentIdentifier',
            investorContractIdentifier: 'investorContractIdentifier',
            investorLoanIdentifier: 'investorLoanIdentifier',
            loanIdentifier: 'loanIdentifier',
            loanIdentifierType: 'UniversalLoan',
            MERS_MINIdentifier: 'SQfNkl1n-JR-',
          },
          Parties: {
            LoanSeller: { partyRoleIdentifier: 'partyRoleIdentifier' },
            Appraiser: { appraiserLicenseIdentifier: 'appraiserLicenseIdentifier' },
            AppraiserSupervisor: { appraiserLicenseIdentifier: 'appraiserLicenseIdentifier' },
            Borrowers: [
              {
                Address: {
                  addressLineText: 'addressLineText',
                  addressType: 'Mailing',
                  cityName: 'cityName',
                  postalCode: '21029-3600',
                  stateCode: 'DE',
                },
                borrowerClassificationType: 'Secondary',
                borrowerMailToAddressSameAsPropertyIndicator: '1',
                borrowerQualifyingIncomeAmount: '321669910225',
                CensusInformation: { censusTractIdentifier: 'censusTractIdentifier' },
                CounselingConfirmation: {
                  counselingConfirmationType: 'MortgageInsuranceCompany',
                  counselingFormatType: 'HomeStudy',
                },
                CreditScore: {
                  creditReportIdentifier: 'creditReportIdentifier',
                  creditRepositorySourceIndicator: '1',
                  creditRepositorySourceType: 'TransUnion',
                  creditScoreImpairmentType: 'InsufficientCreditHistory',
                  creditScoreValue: '0',
                },
                Declaration: {
                  bankruptcyIndicator: '1',
                  citizenshipResidencyType: 'PermanentResidentAlien',
                  loanForeclosureOrJudgmentIndicator: '1',
                },
                Employment: { employmentBorrowerSelfEmployedIndicator: '1' },
                legalEntityType: 'LimitedPartnership',
              },
            ],
            LoanOriginationCompany: { partyRoleIdentifier: 'partyRoleIdentifier' },
            LoanOriginator: {
              loanOriginatorType: 'Correspondent',
              partyRoleIdentifier: 'partyRoleIdentifier',
            },
            Servicer: { partyRoleIdentifier: 'partyRoleIdentifier' },
            WarehouseLender: { partyRoleIdentifier: 'partyRoleIdentifier' },
          },
          TermsOfLoan: {
            lienPriorityType: 'FourthLien',
            mortgageType: 'USDARuralHousing',
            noteRatePercent: '321669910225',
            disclosedIndexRatePercent: '321669910225',
            loanPurposeType: 'Refinance',
            noteAmount: '321669910225',
            noteDate: '2073-10-31',
          },
          Adjustment: {
            InterestRateAdjustment: {
              InterestRateLifetimeAdjustmentRule: {
                ceilingRatePercent: '321669910225',
                firstRateChangePaymentEffectiveDate: '2073-10-31',
                floorRatePercent: '321669910225',
                interestRateRoundingPercent: '321669910225',
                interestRateRoundingType: 'NoRounding',
                marginRatePercent: '321669910225',
              },
              InterestRatePerChangeAdjustmentRules: [
                {
                  adjustmentRuleType: 'First',
                  perChangeMaximumDecreaseRatePercent: '321669910225',
                  perChangeMaximumIncreaseRatePercent: '321669910225',
                  perChangeRateAdjustmentEffectiveDate: '2073-10-31',
                  perChangeRateAdjustmentFrequencyMonthsCount: '26912511',
                },
              ],
            },
            PrincipalAndInterestPaymentAdjustment: {
              IndexRule: {
                indexSourceType: '30DayAverageSOFR',
                interestAndPaymentAdjustmentIndexLeadDaysCount: '26912511',
              },
              PrincipalAndInterestPaymentPerChangeAdjustmentRules: [
                {
                  adjustmentRuleType: 'First',
                  perChangePrincipalAndInterestPaymentAdjustmentPercent: '321669910225',
                },
              ],
            },
            RateOrPaymentChangeOccurrence: {
              convertibleStatusType: 'Active',
              nextRateAdjustmentEffectiveDate: '2073-10-31',
            },
          },
          AMI: {
            loanLimitValueLimitType: 'H',
            loanLimitValueTypeCode: 'HBL',
            propertyAreaMedianIncomeAmount: '321669910225',
          },
          applicationReceivedDate: '2073-10-31',
          assumabilityIndicator: '1',
          borrowerCount: '26912511',
          Buydown: {
            BuydownContributor: { buydownContributorType: 'Borrower' },
            BuydownRule: {
              buydownChangeFrequencyMonthsCount: '26912511',
              buydownDurationMonthsCount: '26912511',
              buydownIncreaseRatePercent: '321669910225',
              buydownInitialDiscountPercent: '321669910225',
            },
          },
          buydownTemporarySubsidyIndicator: '1',
          capitalizedLoanIndicator: '1',
          ClosingInformation: {
            ClosingCostFunds: [
              {
                closingCostContributionAmount: '321669910225',
                closingCostFundsType: 'AggregatedRemainingTypes',
                closingCostSourceType: 'USDARuralHousing',
              },
            ],
          },
          CombinedLTV: {
            combinedLTVRatioPercent: '321669910225',
            homeEquityCombinedLTVRatioPercent: '321669910225',
          },
          Commitment: {
            commitmentCreatedDatetime: '2073-02-31T09:59:30',
            commitmentPeriodDaysCount: '90',
            loanMinimumCouponRate: '321669910225',
            servicingFeePercent: '321669910225',
          },
          Construction: {
            constructionLoanType: 'ConstructionToPermanent',
            constructionToPermanentClosingFeatureType: 'NewNote',
            constructionToPermanentClosingType: 'TwoClosing',
            constructionToPermanentFirstPaymentDueDate: '2073-10-31',
          },
          constructionLoanIndicator: '1',
          convertibleIndicator: '1',
          currentInterestRatePercent: '321669910225',
          DelinquencySummary: { delinquentPaymentsOverPastTwelveMonthsCount: '26912511' },
          DownPayments: [
            {
              downPaymentAmount: '321669910225',
              downPaymentSourceType: 'OriginatingLender',
              downPaymentType: 'Grant',
            },
          ],
          eNoteIndicator: '1',
          Escrow: {
            escrowBalanceAmount: '-16699',
            EscrowItems: [{ escrowItemType: 'HailInsurance', escrowMonthlyPaymentAmount: '321669910225' }],
          },
          escrowIndicator: '1',
          FNMLoanAcquisitionDate: '2073-10-31',
          FNMLoanDeliveryDate: '2073-10-31',
          FNMLoanForeclosureLossRiskType: 'Unknown',
          FNMRuleEffectiveDate: '2073-10-31',
          GovernmentLoan: { sectionOfActType: '234C' },
          HMDALoan: { HMDA_HOEPALoanStatusIndicator: '1' },
          initialFixedPeriodEffectiveMonthsCount: '26912511',
          InterestCalculation: {
            InterestCalculationOccurrence: { currentAccruedInterestAmount: '321669910225' },
            InterestCalculationRule: {
              interestCalculationEffectiveMonthsCount: '26912511',
              interestCalculationPeriodType: 'Month',
            },
          },
          InterestOnly: { interestOnlyEndDate: '2073-10-31' },
          InvestorFeature: { investorFeatureIdentifier: '296,157,946,093,132,082' },
          loanAffordableIndicator: '1',
          LoanFutureFeature: { loanFutureFeatureCode: '296,157,946,093,132,082' },
          LoanLevelCredit: {
            loanLevelCreditScoreSelectionMethodType: 'SellerSpecific',
            loanLevelCreditScoreValue: '0',
          },
          LoanProduct: {
            FNMHomeImprovementProductType: 'GovernmentTitleI',
            PriceLock: { priceLockDatetime: '2073-02-31' },
            refinanceProgramIdentifier: 'DisasterResponse',
          },
          LoanProgram: { loanProgramIdentifier: 'LoanFirstTimeHomebuyer' },
          LTV: { baseLTVRatioPercent: '321669910225', LTVRatioPercent: '321669910225' },
          MaturityRule: {
            loanMaturityDate: '2073-10-31',
            loanMaturityPeriodCount: '26912511',
            loanMaturityPeriodType: 'Month',
          },
          MIData: {
            MICertificateIdentifier: 'MICertificateIdentifier',
            MICompanyNameType: 'MIF',
            MICoveragePercent: '321669910225',
            MIInterestRateAdjustmentPercent: '321669910225',
            MIPremiumFinancedAmount: '321669910225',
            MIPremiumFinancedIndicator: '1',
            MIPremiumSourceType: 'Borrower',
            primaryMIAbsenceReasonType: 'InvestorPurchasedMortgageInsurance',
          },
          Mission: { loanMissionScoreNumber: '1' },
          Modification: { loanModificationEffectiveDate: '2073-10-31' },
          mortgageModificationIndicator: '1',
          Payment: {
            PaymentComponentBreakout: { principalAndInterestPaymentAmount: '321669910225' },
            PaymentRule: {
              initialPrincipalAndInterestPaymentAmount: '321669910225',
              paymentFrequencyType: 'Monthly',
              scheduledFirstPaymentDate: '2073-10-31',
            },
            PaymentSummary: {
              aggregateLoanCurtailmentAmount: '321669910225',
              lastPaidInstallmentDueDate: '2073-10-31',
              lastPaymentReceivedDate: '2073-10-31',
              UPBAmount: '321669910225',
            },
          },
          Pool: {
            poolIdentifier: 'poolIdentifier',
            poolIssueDate: '2073-10-31',
            poolPrefixIdentifier: 'poolPrefixIdentifier',
          },
          prepaymentPenaltyIndicator: '1',
          Product: {
            MBSProductIdentifier: 'MBSProductIdentifier',
            MBSProductName: 'MBSProductName',
            WLProductIdentifier: 'SQf,2K-,FJR-Bu0-2,JV--,w-0o,6l--4b-,-dq-3--,5H',
          },
          Qualification: {
            borrowerReservesMonthlyPaymentCount: '26912511',
            totalLiabilitiesMonthlyPaymentAmount: '321669910225',
            totalMonthlyIncomeAmount: '321669910225',
            totalMonthlyProposedHousingExpenseAmount: '321669910225',
          },
          Refinance: { refinanceCashOutAmount: '-16699', refinanceCashOutDeterminationType: 'NoCashOut' },
          relocationLoanIndicator: '1',
          sharedEquityIndicator: '1',
          SubjectProperty: {
            Address: {
              addressLineText: 'addressLineText',
              addressType: 'Mailing',
              cityName: 'cityName',
              postalCode: '21029-3600',
              stateCode: 'DE',
            },
            attachmentType: 'Attached',
            CensusInformation: { censusTractIdentifier: 'censusTractIdentifier' },
            ConstructionMethod: { constructionMethodType: 'SiteBuilt' },
            financedUnitCount: '1',
            FloodDetermination: { specialFloodHazardAreaIndicator: '1' },
            ManufacturedHome: { manufacturedHomeWidthType: 'SingleWide' },
            Project: {
              condominiumProjectStatusType: 'New',
              FNMCondominiumProjectManagerProjectIdentifier: 'FNMCondominiumProjectManagerProjectIdentifier',
              projectAttachmentType: 'Attached',
              projectClassificationIdentifier: 'E',
              projectDesignType: 'OtherSelectedOnValuationDocumentation',
              projectDwellingUnitCount: '26912511',
              projectDwellingUnitsSoldCount: '26912511',
              projectLegalStructureType: 'Condominium',
              PUDIndicator: '1',
            },
            propertyEstateType: 'FeeSimple',
            propertyFloodInsuranceIndicator: '1',
            PropertyUnits: [
              { bedroomCount: '26912511', propertyDwellingUnitEligibleRentAmount: '321669910225' },
            ],
            propertyUsageType: 'PrimaryResidence',
            PropertyValuation: {
              appraisalIdentifier: 'appraisalIdentifier',
              AVM: { AVMModelNameType: 'ValuePoint4' },
              propertyValuationAmount: '321669910225',
              propertyValuationEffectiveDate: '2073-10-31',
              propertyValuationFormType: 'ExteriorOnlyInspectionResidentialAppraisalReport',
              propertyValuationMethodType: 'DriveBy',
            },
          },
          totalMortgagedPropertiesCount: '26912511',
          Underwriting: {
            AutomatedUnderwriting: {
              automatedUnderwritingCaseIdentifier: 'automatedUnderwritingCaseIdentifier',
              automatedUnderwritingRecommendationDescription: 'Unknown',
              automatedUnderwritingSystemType: 'GuaranteedUnderwritingSystem',
            },
            loanManualUnderwritingIndicator: '1',
          },
          URLA: {
            borrowerPaidDiscountPointsTotalAmount: '321669910225',
            purchasePriceAmount: '321669910225',
          },
        },
      ],
    });
  });
});
