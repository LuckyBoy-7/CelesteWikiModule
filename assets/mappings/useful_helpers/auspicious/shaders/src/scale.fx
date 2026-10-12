
sampler2D TextureSampler : register(s0);
uniform float2 pscale = float2(0, 0);
uniform float2 cpos = float2(0, 0);
uniform float2 worldScalePivot = float2(0, 0);
uniform float2 scale = float2(1, 1);

float4 main(float4 inColor : COLOR0, float2 pos : TEXCOORD0) : COLOR0{
    float2 pivot = (worldScalePivot - cpos) * pscale;
    float4 orig = tex2D(TextureSampler, pivot + (pos - pivot) / scale) * inColor;
    return orig;
}


technique BasicTech {
    pass Pass0 {
        PixelShader = compile ps_3_0 main();
    }
}