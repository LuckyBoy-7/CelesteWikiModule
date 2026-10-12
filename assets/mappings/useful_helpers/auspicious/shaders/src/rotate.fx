
sampler2D TextureSampler : register(s0);
uniform float2 pscale = float2(0, 0);
uniform float2 cpos = float2(0, 0);
uniform float2 worldRotatePivot = float2(0, 0);
uniform float rotate = 0;

float4 main(float4 inColor : COLOR0, float2 pos : TEXCOORD0) : COLOR0{
    float2 pivot = worldRotatePivot - cpos;
    // cos -sin
    // sin cos
    float2 samplePoint = pos / pscale - pivot;
    float2 rotatedSamplePoint = float2(0, 0);
    rotatedSamplePoint.x = cos(rotate) * samplePoint.x - sin(rotate) * samplePoint.y;
    rotatedSamplePoint.y = sin(rotate) * samplePoint.x + cos(rotate) * samplePoint.y;

    float4 orig = tex2D(TextureSampler, (pivot + rotatedSamplePoint) * pscale) * inColor;
    return orig;
}


technique BasicTech {
    pass Pass0 {
        PixelShader = compile ps_3_0 main();
    }
}