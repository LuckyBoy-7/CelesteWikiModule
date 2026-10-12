
sampler2D TextureSampler : register(s0);
uniform float2 pscale = float2(0, 0);
uniform float2 offset = float2(0, 0);

float4 main(float4 inColor : COLOR0, float2 pos : TEXCOORD0) : COLOR0{
    float4 orig = tex2D(TextureSampler, pos - offset * pscale) * inColor;
    return orig;
}


technique BasicTech {
    pass Pass0 {
        PixelShader = compile ps_3_0 main();
    }
}