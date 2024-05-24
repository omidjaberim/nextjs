import {
  Grid,
  InputAdornment,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from '@mui/system';
import React, { useContext, useEffect, useState } from "react";
import { bnbIcon, usdcIcon, usdtIcon, logoN } from "./SmallComponents/Images";
import {
  StyledButton,
  StyledInput,
  ToastNotify,
} from "./SmallComponents/AppComponents";
import { preSaleAddress } from "context/environment";
import { AppContext } from "context/utils";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { formatUnits, parseUnits } from "viem";
import {
  preSaleReadFunction,
  preSaleWriteFunction,
  tokenReadFunction,
  usdcReadFunction,
  usdcWriteFunction,
  usdtReadFunction,
  usdtWriteFunction,
} from "context/hooks";

function PresaleBox(props:{t:any}) {
  const {t} = props;
  const matches = useMediaQuery("(max-width:650px)");
  const { account } = useContext(AppContext);
  const { open } = useWeb3Modal();
  const [buyWith, setBuyWith] = useState<string>("USDT");
  const [endTime, setEndTime] = useState<number>(1716567496);
  const [amount, setAmount] = useState<number | string>("");
  const [preSaleEndedStatus, setPresaleEndedStatus] = useState<boolean>(false);
  const [recivedTokens, setreceivedTokens] = useState<number | string>(0);
  const [tokenPerUSDT, settokenPerUSDT] = useState<number | string>(0);
  const [tokenPerETH, settokenPerETH] = useState<number | string>(0);
  const [tokenPrice, settokenPrice] = useState<number | string>(0);
  const [currentStage, setcurrentStage] = useState<number | string>(0);
  const [loading, setloading] = useState<boolean>(false);
  const [amountRaisedForAll, setamountRaisedForAll] = useState<number | string>(
    0
  );
  const [totalSoldTokens, setTotalSoldTokens] = useState<number | string>(0);
  const [progressBarForAll, setprogressBarForAll] = useState<number>(0);
  const [userPurchasedTokens, setuserPurchasedTokens] = useState<
    number | string
  >(0);
  const [callFunction, setCallFunction] = useState<boolean>(false);
  const [alertState, setAlertState] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "info" | "warning" | any;
  }>({
    open: false,
    message: "",
    severity: undefined,
  });
  const showAlert = (message: string, severity = "error") => {
    setAlertState({
      open: true,
      message,
      severity,
    });
  };

  const toLocalFormat = (val: number | string) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const initVoidSigner = async () => {
    try {
      let dec: any = await tokenReadFunction("decimals", []);
      dec = Number(dec?.toString());
      let stage: any = await preSaleReadFunction("currentStage", []);
      setcurrentStage(+stage?.toString());
      let usdtToToken: any = await preSaleReadFunction("usdtToToken", [
        "1000000000000000000",
        stage?.toString(),
      ]);
      settokenPerUSDT(+formatUnits(usdtToToken?.toString(), dec));
      let ethToToken: any = await preSaleReadFunction("nativeToToken", [
        "1000000000000000000",
        stage?.toString(),
      ]);
      settokenPerETH(+formatUnits(ethToToken?.toString(), dec));
      let presaleData: any = await preSaleReadFunction("phases", [
        +stage?.toString(),
      ]);
      setEndTime(+presaleData[1]?.toString());
      settokenPrice(+formatUnits(presaleData[2]?.toString(), dec));
      let totalRaisedAmount: any = 0;
      let totalTokeSoldContract: any = 0;
      for (let index = 0; index <= +stage?.toString(); index++) {
        let presaleData: any = await preSaleReadFunction("phases", [
          Number(index),
        ]);
        const dividedValue: any =
          Number(formatUnits(presaleData[1]?.toString(), dec)) /
          Number(formatUnits(presaleData[2]?.toString(), dec));
        totalRaisedAmount += Number(parseFloat(dividedValue).toFixed(0));
        const val1: any = Number(formatUnits(presaleData[1]?.toString(), dec));
        totalTokeSoldContract += Number(parseFloat(val1)?.toFixed(0));
      }
      setamountRaisedForAll(toLocalFormat(+totalRaisedAmount));
      setTotalSoldTokens(toLocalFormat(+totalTokeSoldContract));
      let progForAll = (+totalRaisedAmount / 975000) * 100;
      setprogressBarForAll(+progForAll);
      const preSaleStatusContract: any | boolean = await preSaleReadFunction(
        "isPresaleEnded",
        []
      );
      setPresaleEndedStatus(preSaleStatusContract);
    } catch (error) {
      console.log(error, "ERROR VoidSigner Data");
    }
  };
  useEffect(() => {
    initVoidSigner();
    setCallFunction(false);
  }, [callFunction]);

  useEffect(() => {
    if (account) {
      (async () => {
        try {
          let dec: any = await tokenReadFunction("decimals", []);
          dec = Number(dec?.toString());
          let userData: any = await preSaleReadFunction("users", [account]);
          setuserPurchasedTokens(
            parseFloat(formatUnits(userData[6]?.toString(), dec))?.toFixed(2)
          );
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [account]);

  const buyHandler = async () => {
    if (!account) {
      return showAlert("Error! Please connect your wallet.");
    }
    if (!amount || Number(amount) <= 0) {
      return showAlert("Error! Please enter amount to buy.");
    }
    try {
      setloading(true);
      if (buyWith === "USDT") {
        let usdtDecimal: any = await usdtReadFunction("decimals", []);
        usdtDecimal = Number(usdtDecimal?.toString());

        await usdtWriteFunction("approve", [
          preSaleAddress,
          parseUnits(amount.toString(), usdtDecimal).toString(),
        ]);
        await preSaleWriteFunction(
          "buyTokenUSDT",
          [parseUnits(amount.toString(), usdtDecimal).toString()],
          ""
        );
      } else if (buyWith === "USDC") {
        let usdcDecimal: any = await usdcReadFunction("decimals", []);
        usdcDecimal = Number(usdcDecimal?.toString());

        await usdcWriteFunction("approve", [
          preSaleAddress,
          parseUnits(amount.toString(), usdcDecimal).toString(),
        ]);
        await preSaleWriteFunction(
          "buyTokenUSDC",
          [parseUnits(amount.toString(), +usdcDecimal?.toString()).toString()],
          ""
        );
      } else {
        await preSaleWriteFunction(
          "buyToken",
          [],
          parseUnits(amount.toString(), 18).toString()
        );
      }
      setAmount("");
      setreceivedTokens(0);
      setCallFunction(true);
      setloading(false);
      showAlert("Success! Transaction Confirmed", "success");
    } catch (error: any) {
      console.log(error);
      setloading(false);
      showAlert(error?.shortMessage);
    }
  };

  useEffect(() => {
    const calculatorUSDT = async () => {
      try {
        if (buyWith === "USDT" || buyWith === "USDC") {
          let tokenUSDT: any | number = Number(tokenPerUSDT) * Number(amount);
          setreceivedTokens(tokenUSDT?.toFixed(2));
        } else {
          let tokenETH: any | number = Number(tokenPerETH) * Number(amount);
          setreceivedTokens(tokenETH?.toFixed(2));
        }
      } catch (error: any) {}
    };
    if (Number(amount) > 0) {
      calculatorUSDT();
    }
  }, [amount, buyWith]);

  const handleInputChange = (event: any) => {
    const input = event.target.value;
    const newValue = input?.replace(/[^0-9.]/g, "");
    setAmount(newValue);
  };

  const Title =  styled(Grid)(({})=>({  
    background: 'linear-gradient(93deg, #ACA7FF 16.47%, #FED6FF 49.36%, #D7A3A9 81.61%)',
    WebkitBackgroundClip:'text',
    WebkitTextFillColor:'transparent',
    backgroundClip:'text',
    })  
  )

  return (
    <Grid
      width="100%" 
      className="max-w-[620px] font-Oxanium z-20"      
    >
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Stack
        mt={6}
        sx={{
          gap: 2,
        }}
        className="3sm:px-[24px] px-1 py-[12px] rounded-[26px] bg-[#000000d2]"
      >   
        <Grid className="text-[26px] text-white font-Oxanium  font-bold flex  justify-center items-center" >
          <span className="flex  justify-center items-center" >{t("BUY")} <Title>&nbsp;$MV&nbsp;</Title> {t("TOKEN")}  </span>
        </Grid>           
        <Grid className="bg-[#11121A] rounded-2xl  p-[24px]" >         
          <Stack
            justifyContent={"space-between"}
            gap={{ xs: 1, sm: 0 }}
            alignItems={{ xs: "start", md: "center" }}
            className="font-Oxanium flex-col 3sm:flex-row mb-2"
          >
            <Typography
              variant="h1"
              sx={{
                color: "#EBE9ED",              
                lineHeight: { xs: "26px", sm: "26px" },
                fontWeight: "600",
                textAlign: "left",
              }}
              className="flex items-center font-Oxanium text-[20px] md:text-[28px] 3sm:mx-1 mx-auto text-[#B28FEE]"
            >
                {t("Stage")} {Number(currentStage) + 1} / 5
            </Typography>
            <Grid
              sx={{
                backgroundColor: "#352E3E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="3sm:mx-1 mx-auto 3sm:w-[calc(50%-7px)] w-3/4 px-2 rounded-lg"
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#EBE9ED",
                  lineHeight: "26px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
                className=" font-bold font-Oxanium"
              >
                  1
                <span className="mx-1 font-Oxanium font-bold text-[#B28FEE] text-[16px] 3sm:text-[20px]" >$MV</span>
                <span className="text-[#9A9DAB]">=</span>&nbsp;
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#EBE9ED",
                  lineHeight: "32px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
                className="font-Oxanium text-[16px] 3sm:text-[20px]"
              >
                <span
                  style={{
                    color: "#B28FEE",
                    lineHeight: "32px",
                  }}
                >
                  ${" "}
                  {Number(tokenPrice) > 0
                    ? parseFloat(`${1 / Number(tokenPrice)}`).toFixed(4)
                    : "0.00"}
                </span>
              </Typography>
            </Grid>
          </Stack>
          <Stack
            justifyContent={"space-between"}
            gap={{ xs: 1, sm: 0 }}
            alignItems="center"
            className="flex flex-col items-start mt-2 3sm:mt-0 3sm:flex-row "
          >
            <Grid              
              sx={{
                color: "#EBE9ED",
                lineHeight: "32px",
                fontWeight: "400",
                textAlign: "center",
              }}
              className="font-Oxanium text-[14px] 3lg:text-[18px] flex w-3/4 justify-center 3sm:w-1/2  3sm:mx-1 mx-auto bg-[#352E3E] px-[4px] rounded-lg"
            >
              {t("Next Price")} &nbsp;
              <span
                className="text-[#e4acb2] text-[14px] 3lg:text-[18px] bg-gradient-to-r from-[#FED3CA]  to-[#FFA998] inline-block text-transparent bg-clip-text font-Oxanium"
              >                
                  $0.0165
              </span>
            </Grid>
            <Grid
              sx={{               
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 0, md: 3 },                
                py: 0,
              }}
              className="w-3/4 justify-center 3sm:w-1/2 flex  3sm:mx-1 mx-auto bg-[#352E3E] px-[4px] rounded-lg "
            >
              <Grid
                sx={{
                  color: "#EBE9ED",
                  lineHeight: "32px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
                className="font-Oxanium text-[14px] 3lg:text-[18px] "
              >
                {t("Listing Price")} &nbsp;
              </Grid>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "18px",
                  lineHeight: "32px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
                className="text-[#e4acb2] text-[14px] 3lg:text-[18px] bg-gradient-to-r from-[#FED3CA]  to-[#FFA998] inline-block text-transparent bg-clip-text font-Oxanium"
              >
                
                  $0.03
              </Typography>
            </Grid>
          </Stack>
          <Stack
            sx={{
              height: "24px",
              backgroundColor: "#36303C",
              mt: "12px",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Stack
              height={"100%"}
              alignItems={"start"}
              justifyContent={"center"}
              position={"relative"}
            >
              <Grid
                sx={{
                  width: `${progressBarForAll}%`,
                  height: "100%",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(92.51deg, #979BFF 0.48%, #FED6FF 50.74%, #FFAE9C 100%) ",
                  display: "flex",
                  justifyContent: "end",
                  py: 0.5,
                  alignItems: "center",
                }}
              >
                {Number(progressBarForAll) >= 12 && (
                  <Grid
                    sx={{
                      backgroundColor: "#fef7f6",
                      textAlign: "center",
                      px: 1,
                      py: 0.5,
                      width: "fit-content",
                      fontSize: "14px",
                      borderRadius: "12px",
                    }}
                    className="font-Oxanium font-bold leading-4 text-[#131315]"
                  >
                    {progressBarForAll?.toFixed(1)}%
                  </Grid>
                )}
              </Grid>
            </Stack>
          </Stack>
          <Stack
            flexDirection={{ xs: "row", sm: "row" }}
            justifyContent={"space-evenly"}
            gap={{ xs: 1, sm: 0 }}
            alignItems={"center"}
            className="mt-[12px]"
          >
            <Stack gap={1}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#75717F",
                  fontSize: { xs: "16px" },
                  lineHeight: "24px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
                className="font-Oxanium"
              >
                {t("Tokens Sold")}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#EBE9ED",
                  fontSize: "24px",
                  lineHeight: "32px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    color: "#e4acb2",
                  }}
                  className="font-Oxanium text-2xl"
                >
                  {toLocalFormat(totalSoldTokens)}
                </span>{" "}
                {<br />}/ <span className="text-[20px] font-Oxanium" >200,000,000</span>
              </Typography>
            </Stack>
            <Stack gap={1}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#75717F",
                  fontSize: { xs: "16px" },
                  lineHeight: "24px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
                className="font-Oxanium"
              >
                {t("USD Raised")}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#EBE9ED",
                  fontSize: "24px",
                  lineHeight: "32px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    color: "#e4acb2",
                  }}
                  className="font-Oxanium text-2xl"
                >
                  ${toLocalFormat(amountRaisedForAll)}
                </span>{" "}
                { <br />} /<span className="text-[20px] font-Oxanium" > 3,600,000 </span>
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid className="bg-[#11121A] rounded-2xl  px-[24px] py-[15px]" > 
          <Stack
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            alignItems={{ xs: "start", md: "center" }}
            className="flex-col"
          >
            <Typography
              variant="h1"
              sx={{
                whiteSpace: "nobreak",
                color: "#EBE9ED",
                fontWeight: "600",
              }}
              className="leading-8 mb-[16px] text-[28px] font-Oxanium"
            >
              {t("Buy With")}
            </Typography>
            <Stack
              sx={{
                background: "#302a38",
                borderRadius: "12px",
                justifyContent: "space-around",
                py: 1,
                px: 1,
                gap: 1,
                width: '100%',
              }}
              className="2sm:flex-row flex-col"
            >
              {[
                {
                  text: "USDT",
                  img: usdtIcon,
                },
                {
                  text: "BNB",
                  img: bnbIcon,
                },
                {
                  text: "USDC",
                  img: usdcIcon,
                },
              ].map(({ text, img }) => (
                <Stack
                  component={"div"}
                  onClick={() => setBuyWith(text)}
                  key={text}
                  sx={{
                    cursor: "pointer",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",                  
                    borderRadius: "8px",
                    py: { xs: 1, sm: 0.4 },
                    px: { xs: 1.2, md: 1.8 },
                    width: "100%",
                    background: buyWith === text ? "#514e57" : "transparent",
                    transition: "all .5s",
                  }}
                  className="gap-0"
                >
                  <Grid component={"img"} alt="" src={img.src} width="20px" />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#EBE9ED",                    
                      fontWeight: buyWith === text ? "400" : "700",
                      lineHeight: "24px",
                    }}
                    className="mx-3 font-Oxanium md:text-[16px] text-[12px] leading-4 md:leading-6"
                  >
                    {text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Stack
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            mt={{ xs: 1, md: 1 }}
            gap={{ xs: 2, sm: 3 }}
            width={"100%"}
          >
            <Stack width={"100%"}>
              <Grid>
                <StyledInput
                  type="text"
                  placeholder="0.00"
                  color="#EBE9ED"
                  value={amount}
                  onChange={handleInputChange}
                  borderColor="gray"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <Grid
                          component={"img"}
                          alt=""
                          src={
                            buyWith === "USDT"
                              ? usdtIcon.src
                              : buyWith === "BNB"
                              ? bnbIcon.src
                              : usdcIcon.src
                          }
                          sx={{
                            width: "26px",
                            marginRight: { xs: "6px", md: "20px" },
                            marginLeft: { xs: "-10px", md: "0px" },
                            marginTop: { xs: "-3px", sm: "-3px" },
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  className="w-full"
                />
              </Grid>
            </Stack>
            <Stack width={"100%"}>
              <Grid>
                <StyledInput
                  color="#66656D"
                  borderColor={"#312E37"}
                  type={"text"}
                  placeholder="0"
                  value={Number(amount) > 0 ? recivedTokens : "0"}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="end">
                        <Grid
                          component={"img"}
                          alt="logo"
                          src={logoN.src}
                          sx={{
                            width: "28px",
                            marginRight: { xs: "6px", md: "20px" },
                            marginLeft: { xs: "-10px", md: "0px" },
                            marginTop: { xs: "-3px", sm: "-3px" },
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  className="w-full"
                />
              </Grid>
            </Stack>
          </Stack>
          <Stack mt={2}>
            <StyledButton
              width="100%"
              disabled={loading}
              onClick={async () => (account ? buyHandler() : await open())}
            >
              
              {loading ? <span className="font-bold text-oxanium text-[22px]" >{t("Processing")}...</span>  : account ? 
              <span className="font-bold text-oxanium text-[32px]" >{t("BUY")}</span>:
              <span className="font-bold text-oxanium text-[22px]" >{t("Connect")}</span>}              
            </StyledButton>
          </Stack>
          {account && (
            <Stack alignItems={"center"} mt={1}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#75717F",
                  fontSize: "14px",
                  lineHeight: "24px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
                className="font-Oxanium"
              >
                {t("Your Balance")} :{" "}
                <span
                  style={{
                    color: "#e4acb2",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "32px",
                  }}
                >
                  {userPurchasedTokens} MV
                </span>
              </Typography>
            </Stack>
          )}
        </Grid>
      </Stack>
    </Grid>
  );
}

export default PresaleBox;
